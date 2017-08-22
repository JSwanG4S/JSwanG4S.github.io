
var activeTab = "MobilityAssessment";

function ChangeTab(tab)
{
	if(tab != activeTab)
	{
		document.getElementById("assessmentFrame").contentWindow.restartAssessment();
		ClearActiveTabs();
		document.getElementById("assessmentFrame").src = tab + ".html";
		document.getElementById(tab + 'Tab').classList.add("tab_selected");
	}
}


function ClearActiveTabs()
{
	var tabs = document.getElementsByClassName("tab");
	var i;
	for(i = 0; i < tabs.length; i++)
	{
		tabs[i].classList.remove("tab_selected");
	}
}