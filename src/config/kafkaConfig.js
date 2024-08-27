import { Kafka } from "kafkajs";

class KafkaConfig {
    constructor() {
        this.kafka = new Kafka({
            clientId: 'kafka',
            brokers: ['localhost:9093']
        });
        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer({ groupId: 'product' });

        this.init();
    }

    async init() {
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({ topic: 'new-address', fromBeginning: true });
            await this.consumer.subscribe({ topic: 'new-orden', fromBeginning: true });

            await this.consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    const value = message.value.toString();
                    if (topic === 'new-address') {
                        await this.handleNewAddress(value);
                    } else if (topic === 'new-orden') {
                        await this.handleNewOrder(value)
                    }
                },
            });

        } catch (error) {
            console.log('Error in Kafka consumer initialization:', error);
        }
    }

    async handleNewAddress(value) {
        const { createAddress } = await import('../controller/address.controller.js');
        createAddress(value);
    }


    async handleNewOrder(value) {
        const { createOrder } = await import('../controller/order.controller.js');
        createOrder(value)
    }

    async produce(topic, message) {
        try {
            await this.producer.connect();
            await this.producer.send({
                topic: topic,
                messages: message
            });
        } catch (error) {
            console.log('Error producing message:', error);
        } finally {
            await this.producer.disconnect();
        }
    }
}

export default KafkaConfig;

