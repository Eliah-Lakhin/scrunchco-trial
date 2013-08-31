/*
 A small plugin to perform Handlebars template compilation in requirejs-style:

 	require(['tpl!main'], function(precompiledHandlebarTemplate) {...})

 precompiledHandlebarTemplate is based on /tpl/main.html source.
*/
define({
	load: function(name, req, onload) {
		var cache;

		cache = {};

		req(
			['jquery', 'ext/handlebars', 'misc/helpers'],
			function($, handlebars) {
				if (cache[name]) {
					onload(cache[name]);
					return;
				}

				$.get('/tpl/' + name + '.html').done(function(source) {
					cache[name] = handlebars.compile(source);
					onload(cache[name]);
				});
			}
		);
	}
});