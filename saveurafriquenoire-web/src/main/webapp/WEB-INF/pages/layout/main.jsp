<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>

<!-- TODO -->

<!--

	Template pour les pages standards

 -->

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="content-language" content="fr">

<title><fmt:message key="application.titre" /></title>

<!-- CSS Twitter Bootstrap  -->
<link href="<c:url value="/resources/css/libs/bootstrap-3.3.1.css" />"
	rel="stylesheet" />

</head>

<body>

	<%-- <div class="container" id="container-header">
			<!-- HEADER -->
			<div class="row">
				<tiles:insertAttribute name="header" />
			</div>
		</div> --%>





	<header id="header">
		<tiles:insertAttribute name="header" />
	</header>
	<section class="class">
		<tiles:insertAttribute name="menu" />
	</section>
	<section class="banner">
		<tiles:insertAttribute name="baniere" />
	</section>

	<section class="class">
		<tiles:insertAttribute name="body" />
	</section>
s


	<footer id="footer" class="style2" >
		<tiles:insertAttribute name="footer" />
	</footer>

</body>
</html>
