let years = [1,2,3,4];
let branches = ["CSE", "IT", "AIML", "AIDS"];
// sections = {"CSe": [1,2,3], "IT":[1,2,3,4], "AIML":[1], "AIDS":[1,2]};
let sections = [1,2,3,4];
var selectedYear, selectedBranch, selectedSection;


const itemstoDD = items =>{
    result = []
    const itemsToHTMLDropdown = (year) => {
        console.log(year);
        return '<li><a class="dropdown-item" href="#">' + year + '</a></li>';
    }

    items.forEach((year) => {
        result.push(itemsToHTMLDropdown(year));
    })
    return result;
};


let yeardd = document.getElementById('years');
yeardd.innerHTML = itemstoDD(years).join('\n');

let branchdd = document.getElementById('branches');
branchdd.innerHTML = itemstoDD(branches).join('\n');

let sectiondd = document.getElementById('sections');
sectiondd.innerHTML = itemstoDD(sections).join('\n');

$("#years li a").click(function(){
    selectedYear = $(this).text();
});

$("#branches li a").click(function(){
    selectedBranch = $(this).text();
});

$("#sections li a").click(function(){
    selectedSection = $(this).text();
});