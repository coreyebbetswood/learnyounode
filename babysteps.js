console.log(process.argv);
var total=0;
for(i=2; i<process.argv.length; i++){
//console.log(process.argv[i]);
total=total+process.argv;
}
console.log(total);
