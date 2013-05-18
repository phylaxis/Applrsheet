<html>
<head>
	<title>Applr Sheet Demo</title>

	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery.applrsheet.js"></script>

	<script type="text/javascript" src="js/bootstrap.min.js"></script>

	<link rel="stylesheet" type="text/css" href="	css/bootstrap.min.css">

	<style type="text/css">
		body {
			margin: 20px;
		}
	</style>

	<!-- Set up iOS meta -->
	<meta name="viewport" content="width=device-width">
	
</head>
<body>
<div id="container">
	<h1>Some Stuff</h1>
	<p>Lorem ipsum dolor sit amet, capio et imputo ratis at quod ut, quibus iaceo bene, wisi. Luptatum demoveo, abigo quod ut duis consequat multo. Nostrud iriure defui vicis duis ex abluo feugait, proprius, vulputate letatio. Commodo, quidne, illum commodo bene consectetuer diam proprius opes tum.</p>
	<p>Lorem ipsum dolor sit amet, capio et imputo ratis at quod ut, quibus iaceo bene, wisi. Luptatum demoveo, abigo quod ut duis consequat multo. Nostrud iriure defui vicis duis ex abluo feugait, proprius, vulputate letatio. Commodo, quidne, illum commodo bene consectetuer diam proprius opes tum.</p>
	<p>Lorem ipsum dolor sit amet, capio et imputo ratis at quod ut, quibus iaceo bene, wisi. Luptatum demoveo, abigo quod ut duis consequat multo. Nostrud iriure defui vicis duis ex abluo feugait, proprius, vulputate letatio. Commodo, quidne, illum commodo bene consectetuer diam proprius opes tum.</p>
	<p>Lorem ipsum dolor sit amet, capio et imputo ratis at quod ut, quibus iaceo bene, wisi. Luptatum demoveo, abigo quod ut duis consequat multo. Nostrud iriure defui vicis duis ex abluo feugait, proprius, vulputate letatio. Commodo, quidne, illum commodo bene consectetuer diam proprius opes tum.</p>
	<p>Lorem ipsum dolor sit amet, capio et imputo ratis at quod ut, quibus iaceo bene, wisi. Luptatum demoveo, abigo quod ut duis consequat multo. Nostrud iriure defui vicis duis ex abluo feugait, proprius, vulputate letatio. Commodo, quidne, illum commodo bene consectetuer diam proprius opes tum.</p>
	<p id="clicker" class="btn btn-info">Click here</p>
	<p id="clicker2"class="btn btn-info">Click there</p>
</div>

<script type="text/javascript">
$('#clicker').applrsheet({
	"color":"#333",
	"transition":"slow",
	"sheetAttrs":{
		"id":"mySheet",
		"ajax":{
			"url":"sheet1.html"
		}
	},
	"sheetCSS":{
		"color":"white"
	},
	"subAttrs":{
		"id":"subSheet",
		"ajax":{
			"url":"subsheet1.html"
		}
	}
});

$('#clicker2').applrsheet({
	"color":"#CCC",
	"sheetAttrs":{
		"id":"mySheet2",
		"class":"thisSheet2",
		"ajax":{
			"url":"sheet2.html"
		}
	},
	"sheetCSS":{
		"color":"red",
		"background-color":"green"
	}
});
</script>
</body>
</html>