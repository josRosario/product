import { Kafka } from "kafkajs";

class kafkaConfig {
    constructor(){
        this.kafka = new Kafka({
            clientId:'kafka',
            brokers:['localhost:9093']
        })
        this.prodecer = this.kafka.producer();
        this.consumer = this.kafka.consumer({groupId:'test-group'});
    }

    async prodece(topic, message){
        try {
            await this.prodecer.connect();
            await this.prodecer.send({
                topic: topic,
                messages:message
            })
            
        } catch (error) {
            console.log(error);
            
        }finally{
            await this.prodecer.disconnect();
        }
    }

    async consume(topic, callback) {
        try {
          await this.consumer.connect();
          await this.consumer.subscribe({ topic: topic, fromBeginning: true });
      
          await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
              /*if (topic ==  "my-topic"){
                console.log(message.value.toString());
                return;
              }*/
              const value = message.value.toString();
              callback(value);
            },
          });
        } catch (err) {
          console.log(err);
        }
      }
}

export default kafkaConfig;