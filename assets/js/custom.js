/*Custom JavaScript*/
$(function(){
  // Make all tables striped by default.
  $(".challenge-page table").addClass("table table-hover table-responsive");
  $(".challenge-page table thead").addClass("thead-dark");

  // Handle foldable behavior of starter code and hints (on click and at start).
  ['.starter', '.hint'].forEach(function(klass){
    $(klass).click(function(event) {
      var trigger = $(event.target).has(".fold-unfold").length > 0
                  || $(event.target).filter(".fold-unfold").length > 0;
      if (trigger) {
        $(">*:not(h2)", this).toggle(400);
        $(">h2>span.fold-unfold", this).toggleClass("icon-collapse-down icon-collapse-up");
        event.stopPropagation();
      }
    });
  })

  $(".starter").each(function() {
    foldBlock(this);
  });
  $(".hint").each(function() {
    foldBlock(this);
  });
});

function foldBlock(that) {
  $(">*:not(h2)", that).toggle();
  var h2 = $("h2:first", that);
  h2.append("<span class='fold-unfold icon icon-collapse-down'></span>");
}
