  $(".imgmouse").mouseover(function () {
  $(this).css("opacity", "0.5")
  }).mouseout(function () {
  $(this).css("opacity", "1")
  })
  $("#appimg").mouseover(function () {
  $("#appdiv").slideDown()
  }).mouseout(function () {
  $("#appdiv").slideUp()
  })
  $("#wximg").mouseover(function () {
  $("#wxdiv").slideDown()
  }).mouseout(function () {
  $("#wxdiv").slideUp()
  })
  $("#wbimg").mouseover(function () {
  $("#wbdiv").slideDown()
  }).mouseout(function () {
  $("#wbdiv").slideUp()
  })