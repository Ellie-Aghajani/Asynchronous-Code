console.log('before');

getUser(1, function(user){
    console.log(user);
    getRepositories("Elli", function(repos){
        console.log(repos);
    
    });

});



console.log('after');



function getUser(id,  callback) {
    setTimeout(() => {
        console.log('reading a user from a database...');
        callback({id: id, gitHubUserName: 'Ellie-Aghajani'});

    },2000);
   
}
function getRepositories(username, callback){
    setTimeout(() => {
        console.log('calling github API...');
        callback(['repo1', 'repo2', 'repo3']);

    },2000);
}