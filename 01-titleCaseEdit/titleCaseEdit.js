function titleCaseEdit(title){
  let lowercaseTitle = title.toLowerCase().split(" ");
  
  for(let i = 0; i < lowercaseTitle.length; i++){
    lowercaseTitle[i] = lowercaseTitle[i][0].toUpperCase() + lowercaseTitle[i].slice(1);
  }

  let titleCasedEdit = lowercaseTitle.join(" ");

  return titleCasedEdit;
}

// Do not edit this line;
module.exports = titleCaseEdit;