const grpc = require('grpc')
const PROTO_PATH = 'messageConsumer.proto'
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const KafkaConsumerService = grpc.loadPackageDefinition(packageDefinition).KafkaConsumerService
const client = new KafkaConsumerService('localhost:8000',
    grpc.credentials.createInsecure())
 
    const val = {};
    val.topic = ['t2'];
    val.header = { event: 'test' };
    var call = client.getAll(val);
    call.on('data', function(data) {
      console.log(data);
    });
  
  

