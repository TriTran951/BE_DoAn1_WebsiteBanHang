import redis from 'redis';
const redisClient = redis.createClient({
    url: ' redis://default:VZT1iocfRH6NTGYPi7WgA8K4H61d8ChI@redis-19303.c292.ap-southeast-1-1.ec2.cloud.redislabs.com:19303',
});

// Định nghĩa các xử lý sự kiện cho Redis instance
await redisClient.connect();

export default redisClient;
