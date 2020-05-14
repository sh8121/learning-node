module.exports.handler = (event, context) => {
	console.log(event);
	context.succeed("hello " + event.name);
};
