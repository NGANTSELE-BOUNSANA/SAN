<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<html>
	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta http-equiv="content-language" content="fr">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="robots" content="index, follow">

		<title><fmt:message key="application.titre" /></title>

		<!-- Essential styles -->
		<link rel="stylesheet" href="<c:url value="/resources/css/libraries/bootstrap-3.3.1.css" />" type="text/css" />
		<link rel="stylesheet" href="<c:url value="/resources/css/libs/font-awesome.min.css" />" type="text/css" />
		<link rel="stylesheet" href="<c:url value="/resources/css/libs/jquery.fancybox.css?v=2.1.5" />" media="screen" />

    <!-- CSS Stylesheet -->
    <link href="/ressources/css/bootstrap.min.css" rel="stylesheet"><!-- bootstrap css -->
    <link href="/ressources/css/bootstrap-datepicker.css" rel="stylesheet"><!-- bootstrap css -->    
	<link href="/ressources/css/owl.carousel.css" rel="stylesheet"><!-- carousel Slider -->   
    <link href="/ressources/css/font-awesome.css" rel="stylesheet"><!-- font awesome --> 
    <link href="/ressources/css/animate.css" rel="stylesheet"><!-- css3 animation -->
    <link href="/ressources/css/jquery.timepicker.css" rel="stylesheet"><!-- timepicker css -->
    <link href="/ressources/css/jquery.selectbox.css" rel="stylesheet"><!-- select Box css -->
    <link href="/ressources/css/docs.css" rel="stylesheet"><!--  template structure css -->
    <link href="/ressources/css/yellow.css" rel="stylesheet" id="switch_style"><!-- Theme Color css -->


		<!-- Boomerang styles -->
		<link id="stylesheet" href="<c:url value="/resources/css/libs/global-style.css" />" rel="stylesheet" media="screen" type="text/css" />

	
		<!--[if lt IE 9]>
			<link rel="stylesheet" href="<c:url value="/resources/css/libs/sky-forms.css" />" type="text/css" />
		<![endif]-->

		<!-- Required JS -->
		<script src="<c:url value="/resources/js/libs/jquery-1.11.1.min.js" />"></script>
		<script src="<c:url value="/resources/js/libs/jquery-ui-1.11.2.min.js" />"></script>

		<!-- Favicon -->
		<link href="images/favicon.png" rel="icon" type="image/png">

	</head>

	<body>

		<div class="body-wrap">
			<tiles:insertAttribute name="header" />
			<tiles:insertAttribute name="messages" />
			<tiles:insertAttribute name="body" />
			<tiles:insertAttribute name="footer" />
		</div>


		
		    <script type="text/javascript" src="/ressources/js/jquery-1.12.4.min.js" ></script>
    <script type="text/javascript" src="/ressources/js/bootstrap.js"></script>
    <script type="text/javascript" src="/ressources/js/owl.carousel.js"></script>
    <script type="text/javascript" src="/ressources/js/wow.min.js"></script>
    <script type="text/javascript" src="/ressources/js/jquery.timepicker.js"></script>
    <script type="text/javascript" src="/ressources/js/bootstrap-datepicker.js"></script>
    <script type="text/javascript" src="/ressources/js/jquery.form-validator.min.js"></script>
    <script type="text/javascript" src="/ressources/js/jquery.selectbox-0.2.js"></script>
    <script type="text/javascript" src="/ressources/js/common.js"></script>
    <script type="text/javascript" src="/ressources/js/script.js"></script>



		<!--[if lt IE 9]>
			<script src="<c:url value="/resources/js/libs/html5shiv.min.js" />"></script>
			<script src="<c:url value="/resources/js/libs/respond.min.js" />"></script>
		<![endif]-->

	</body>
</html>
