<!DOCTYPE HTML>
<head>
<meta charset="utf-8">
<title>IXD Workshop</title>
</head>
<body>

<style>
* {
  margin:0;
  padding:0;
}
body {
  background-color:#53a0d8;
  text-align:center;
}
img {
  width:100%;
  min-width:990px;
}
</style>

<img src="images/img_banner.jpg" alt="">

<?php
if ($_SERVER['SERVER_NAME'] == 'ixd-workshop.com') {
?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-31075740-2', 'auto');
  ga('send', 'pageview');
</script>
<?php
}
?>

</body>
</html>