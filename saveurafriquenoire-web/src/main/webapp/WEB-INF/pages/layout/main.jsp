<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

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
		<link href="<c:url value="/resources/css/libs/bootstrap-3.3.1.css" />" rel="stylesheet"  />

	</head>

	<body>

		<div class="container" id="container-header">
			<!-- HEADER -->
			<div class="row">
				<tiles:insertAttribute name="header" />
			</div>
		</div>


		<div class="container" id="container-header">
			<!-- MESSAGES -->
			<div class="row">
				<tiles:insertAttribute name="messages" />
			</div>
		</div>

		<div class="container" id="central">
			<div class="row">
			    <div id="navbar-left" class="col-md-2" >
					<!-- MENU -->
				    <!-- tiles:insertAttribute name="menu" / -->
				</div>
				<div id="contenu" class="col-md-10">
					<!-- Message Panel -->
					<div class="row">
						<div id="messagePanel" style="display:none;" class="alert alert-error offset4"></div>
					</div>
					<c:if  test="${not empty exception}">
						<div class="row">
							<div class="alert-error">
							  <button type="button" class="close" data-dismiss="alert">&times;</button>
							  <strong>Des erreurs sont survenues à l'exécution !</strong> <c:out value="${exception.message}"></c:out>.
							</div>
						</div>
					</c:if>
					<div class="row">
						<!-- CONTENU -->
				       <tiles:insertAttribute name="body" />
					</div>
				</div>
			</div>
		</div>

		<div class="container" id="container-footer">
			<div class="footer" id="footer">
		       <tiles:insertAttribute name="footer" />
			</div>
		</div>

	     <!-- JQuery -->
	     <script src="<c:url value="/resources/js/libs/jquery-1.11.1.min.js" />"></script>
	     <!-- JQuery Widget -->
		 <script src="<c:url value="/resources/js/libs/jquery-ui-1.11.2.min.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/autoNumeric-1.9.27.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.ui.datepicker-fr.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.validate-1.13.1.min.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/select2-3.4.2.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.iframe-transport-9.5.0.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.fileupload-9.5.0.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/multi-select-0.9.8.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.confirm.min.js" />"></script>
		 <!-- JQuery Widget JTable -->
		 <script src="<c:url value="/resources/js/libs/jquery.jtable-2.3.1.js" />"></script>
		 <script src="<c:url value="/resources/js/libs/jquery.jtable.fr.js"/>"></script>
		 <!-- PURL, parse des parametres http en js -->
		 <script src="<c:url value="/resources/js/libs/purl-2.3.1.js" />"></script>

		 <!-- Bootstrap -->
		 <script src="<c:url value="/resources/js/libs/bootstrap-3.3.1.min.js" />"></script>

		 <!-- DEI CCMT -->
		 <script src="<c:url value="/resources/js/libs/socle-dei-commons-2.1.js" />"></script>

		 <!-- projet -->
		 <script src="<c:url value="/resources/js/scenes/project-commons.js" />"></script>

		 <script src="${pageContext.request.contextPath}/resources/js/scenes/<tiles:insertAttribute name="script-domaine" />.js"></script>
	</body>
</html>
