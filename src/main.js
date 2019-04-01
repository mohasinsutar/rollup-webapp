import faker from 'faker';
var Main = {
    sayHello: function(){
        console.log('i am here to say hello');
    },
    sayHi: function(){
      console.log('I am here to say Hi');
    },
    printDemo: function(){
        return (
            faker.name.findName() + '<br/>' + faker.internet.email() + '<br/>' + faker.address.city() + '<br/>' + faker.address.zipCode()
        );
    }
};
export default Main;