/** file: stack.js Very Hacky Stack Diagram Editor **/

// look for #myslug
var locn=""+window.location;
var slug = "";
if (locn.match(/#(\w+)/)) {
	slug = locn.match(/#(\w+)/)[1];
	load();
} else {
	// random
	slug = makeid();
	// set the hash
	window.location = locn+"#"+slug;
}
console.log("slug", slug);

// By csharptest.net, c.f. http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
function makeid(len)
{
	if (!len) len = 20; // a nice long (uncrackable without a lot of patience) length
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function updateDia() {
	var text = $('#diasrc').val();
	var lines = text.split("\n").length;
	lines = Math.max(lines+2, 6);
	var fontSize = $('#diasrc').css('font-size');
	var lineHeight = Math.floor(parseInt(fontSize.replace('px','')) * 1.4);
	$('#diasrc').height(lines*lineHeight);
	console.log("Lines", lines, "height", lines*20);

	// clear all out
	$('#diadraw').html("");

	// any 2 line-breaks = a new diagram
	var dias = text.split(/(\r\n\s*\r\n|\n\s*\n|\r\s*\r)\s*/);
	
	for(var di=0; di<dias.length; di++) {
		var dia = dias[di].trim();
		if ( ! dia) continue;
		updateDia2(dia);
	}
}

function load() {
	assert(slug);
	$.get('http://stash.soda.sh/daniel-stash/'+slug+'.json')
		.done(function(result) {
			$('#diasrc').val(result.cargo);		
			updateDia();	
		});
}
function save(el) {
	assert(slug);
	var $button = $(el);
	$button.button('loading');
	var stash = escape($('#diasrc').val());
	var f = $.get('http://stash.soda.sh/daniel-stash/'+slug+'.json?action=save&stash='+stash);
	f.fail(function(err) {		
		var popup = $('<div class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><strong>Bogus!</strong> '+JSON.stringify(err)+'</div>');
		$('#page-main').prepend(popup);
	});
	f.done(function(err) {		
		var popup = $('<div class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>Saved :)</div>');
		$('#page-main').prepend(popup);
	});
	f.always(function() {
		$button.button('reset');
	});
}

function updateDia2(text) {
	var rows = text.split('\n');
	if ( ! rows) return;
	// width?
	var cols = 0;
	for(var ri=0; ri<rows.length; ri++) {
		var blocks = rows[ri].split(/\]\s*\[/);
		cols = Math.max(cols, blocks.length);	
	}

	var wrapper = $("<div class='dia panel panel-primary'></div>");
	var ri=0;
	var title = "System Stack Diagram";
	if (rows[0].charAt(0) !== '[') {
		title = rows[0];
		ri++;
	}
	wrapper.append("<div class='panel-heading'><h3 class='panel-title'>"+title+"</h3></div>");

	// collect footnote definitions
	var footnotes = {};
	for(fri=0; fri<rows.length; fri++) {
		var fnote = rows[fri].match(/^(\w+):(.+)/);
		if (fnote) {
			footnotes[fnote[1]] = fnote[2];
		}
	}
	console.log(footnotes);

	var tbl = $("<table class='dia'></table>");
	for(; ri<rows.length; ri++) {
		// # or // for title or comments
		if (rows[ri].charAt(0)==='#' || rows[ri].substring(0,2)==='//') continue;
		// blank
		if (rows[ri].match(/^\s*$/)) continue;
		// footnote defn
		if (rows[ri].match(/^(\w+):/)) continue;

		var blocks = rows[ri].split(/\]\s*\[/);
		if (blocks.length==0) continue;
		var row = $("<tr></tr>");
		for(var bi=0; bi<blocks.length; bi++) {
			var block = blocks[bi];
			block = block.replace(/\[|\]/g,'');
			var w = 1;
			var bbits = block.trim().split(":");
			var hasWidth=false;
			if (bbits[bbits.length-1].match(/\d+/)) {
				w = bbits[bbits.length-1];
				hasWidth = true;
			} else if (bbits[bbits.length-1]==='width') {
				w = cols;
				hasWidth = true;
			} else if (blocks.length===1) w=cols;
			// From OS:Linux, take class = OS for possible styling
			var bclass = "";
			if (bbits[0].match(/^\w+$/)) bclass = bbits[0];
			var bname = bbits[0];
			if (bbits.length>2 || (bbits.length>1 && ! hasWidth)) {
				bname += ": "+bbits[1];
			}
			if (bname==='gap') {bname =''; bclass='gap'}
			// bold
			bname = bname.replace(/\*(.+?)\*/g, "<b>$1</b>");
			// (notes)
			bname = bname.replace(/\((.+?)\)/g, "<small>($1)</small>");
			// ^footnotes
			bname = bname.replace(/\^(\w+)/g, "<sup>$1</sup>");
			$b = $("<td class='"+bclass+"' colspan='"+w+"'>"+bname+"</td>");
		  	row.append($b);
	   }
	   tbl.append(row);
	}

	wrapper.append(tbl);

	if (footnotes) {
		var ul = $("<ul></ul>");
		for(var fk in footnotes) {
			ul.append("<li>"+fk+": "+footnotes[fk]+"</li>");
		}
		wrapper.append(ul);	
	}

	$('#diadraw').append(wrapper);

	iconise();
}

/** TODO It'd be nice to have icons for Java, Linux etc. */
function iconise() {

}


$('#diasrc').change(updateDia());

// initialise after page load
$(function() {
	updateDia();
	$('.btn').button();
}

