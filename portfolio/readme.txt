 =============================================

 1. Copy this code in html file before body tag =>

	<script src="js/jquery.scrollUp.min.js"></script>


 =============================================
  2.Copy this code in css file

 /** SCROLL TO TOP START **/
a#scrollUp{
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 3s ease infinite;
  
  width: 172px;
  height: 50px;
  left: 2%;
  top: 80%;
  position:absolute;
  color: #fff;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 800;
  text-transform: uppercase;
  margin:0 auto

}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
/** SCROLL TO TOP END **/

==========================================

 3.Copy this code in main js file


 $.scrollUp({
        scrollText:'Instant Quote',
    });
===========================================

 4. Copy the "jquery.scrollUp.min.js " file from js folder and keep this file in your js folder.

 That ok.