$("#accordion-dob").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("bi-minus-square-fill bi-plus-square-fill");
});