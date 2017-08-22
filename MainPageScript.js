

function ChangeTab(tab)
{
	ClearActiveTabs();
	document.getElementById("assessmentFrame").src = tab + ".html";
	document.getElementById(tab + 'Tab').classList.add("tab_selected");
	
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