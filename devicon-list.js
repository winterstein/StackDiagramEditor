function DeviconList(){

};

DeviconList.find = function(name) {
	console.log("DeviconList.find?? ["+name+"]");
	if (!name) return null;
	name = name.trim();
	if (!name) return null;
	console.log("DeviconList.find ["+name+"]");
	var options = [];
	for(var i=0; i<DeviconList.list.length; i++) {
		var di = "devicon-"+DeviconList.list[i];
		if (di.indexOf(name) != -1) {
			options.push(di);
		}
	}
	options.sort();
	return options.length==0? null : options[0];
}

DeviconList.list = ["ssh-original-wordmark",
"ssh-plain-wordmark",
"ssh-original",
"ssh-plain",
"sourcetree-original-wordmark",
"sourcetree-plain-wordmark",
"sourcetree-original",
"sourcetree-plain",
"phpstorm-plain-wordmark",
"phpstorm-plain",
"jeet-plain-wordmark",
"jeet-plain",
"gitlab-plain-wordmark",
"gitlab-plain",
"github-original-wordmark",
"github-plain-wordmark",
"github-original",
"github-plain",
"d3js-plain",
"confluence-original-wordmark",
"confluence-plain-wordmark",
"confluence-original",
"confluence-plain",
"bitbucket-original-wordmark",
"bitbucket-plain-wordmark",
"bitbucket-original",
"bitbucket-plain",
"safari-line-wordmark",
"safari-line",
"safari-plain-wordmark",
"safari-plain",
"jetbrains-plain",
"jetbrains-line",
"jetbrains-line-wordmark",
"jetbrains-plain-wordmark",
"django-line",
"django-line-wordmark",
"django-plain",
"django-plain-wordmark",
"gimp-plain",
"redhat-plain-wordmark",
"redhat-plain",
"cplusplus-line",
"cplusplus-line-wordmark",
"cplusplus-plain",
"cplusplus-plain-wordmark",
"csharp-line",
"csharp-line-wordmark",
"csharp-plain",
"csharp-plain-wordmark",
"c-line",
"c-line-wordmark",
"c-plain",
"c-plain-wordmark",
"nodewebkit-line-wordmark",
"nodewebkit-line",
"nodewebkit-plain-wordmark",
"nodewebkit-plain",
"nginx-original",
"nginx-original-wordmark",
"nginx-plain",
"nginx-plain-wordmark",
"erlang-plain-wordmark",
"erlang-plain",
"doctrine-line-wordmark",
"doctrine-line",
"doctrine-plain-wordmark",
"doctrine-plain",
"apache-line-wordmark",
"apache-line",
"apache-plain-wordmark",
"apache-plain",
"go-line",
"redis-plain-wordmark",
"redis-plain",
"meteor-plain-wordmark",
"meteor-plain",
"heroku-line-wordmark",
"heroku-original-wordmark",
"heroku-line",
"heroku-original",
"heroku-plain-wordmark",
"heroku-plain",
"go-plain",
"docker-plain-wordmark",
"docker-plain",
"amazonwebservices-original",
"amazonwebservices-plain",
"amazonwebservices-plain-wordmark",
"android-plain-wordmark",
"android-plain",
"angularjs-plain-wordmark",
"angularjs-plain",
"appcelerator-original",
"appcelerator-plain",
"appcelerator-plain-wordmark",
"apple-original",
"apple-plain",
"atom-original-wordmark",
"atom-plain-wordmark",
"atom-original",
"atom-plain",
"backbonejs-plain-wordmark",
"backbonejs-plain",
"bootstrap-plain-wordmark",
"bootstrap-plain",
"bower-line-wordmark",
"bower-line",
"bower-plain-wordmark",
"bower-plain",
"chrome-plain-wordmark",
"chrome-plain",
"codeigniter-plain-wordmark",
"codeigniter-plain",
"coffeescript-original-wordmark",
"coffeescript-plain-wordmark",
"coffeescript-original",
"coffeescript-plain",
"css3-plain-wordmark",
"css3-plain",
"debian-plain-wordmark",
"debian-plain",
"dot-net-plain-wordmark",
"dot-net-plain",
"drupal-plain-wordmark",
"drupal-plain",
"firefox-plain-wordmark",
"firefox-plain",
"foundation-plain-wordmark",
"foundation-plain",
"git-plain-wordmark",
"git-plain",
"grunt-line-wordmark",
"grunt-line",
"grunt-plain-wordmark",
"grunt-plain",
"gulp-plain",
"html5-plain-wordmark",
"html5-plain",
"ie10-original",
"ie10-plain",
"illustrator-line",
"illustrator-plain",
"inkscape-plain-wordmark",
"inkscape-plain",
"java-plain-wordmark",
"java-plain",
"javascript-plain",
"jquery-plain-wordmark",
"jquery-plain",
"krakenjs-plain-wordmark",
"krakenjs-plain",
"laravel-plain-wordmark",
"laravel-plain",
"less-plain-wordmark",
"linux-plain",
"mongodb-plain-wordmark",
"mongodb-plain",
"moodle-plain-wordmark",
"moodle-plain",
"mysql-plain-wordmark",
"mysql-plain",
"nodejs-plain-wordmark",
"nodejs-plain",
"oracle-original",
"oracle-plain",
"photoshop-line",
"photoshop-plain",
"php-plain",
"postgresql-plain-wordmark",
"postgresql-plain",
"python-plain-wordmark",
"python-plain",
"rails-plain-wordmark",
"rails-plain",
"react-original-wordmark",
"react-plain-wordmark",
"react-original",
"react-plain",
"ruby-plain-wordmark",
"ruby-plain",
"sass-original",
"sass-plain",
"symfony-original-wordmark",
"symfony-plain-wordmark",
"symfony-original",
"symfony-plain",
"travis-plain-wordmark",
"travis-plain",
"trello-plain-wordmark",
"trello-plain",
"ubuntu-plain-wordmark",
"ubuntu-plain",
"vim-plain",
"windows8-original-wordmark",
"windows8-plain-wordmark",
"windows8-original",
"windows8-plain",
"wordpress-plain-wordmark",
"wordpress-plain",
"yii-plain-wordmark",
"yii-plain",
"zend-plain-wordmark",
"zend-plain"];
