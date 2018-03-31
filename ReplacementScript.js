const normalScript = "*This Is A*: //Normal Ship// \n\nThe following additional rules are in effect: \n//- Day 1 Rampage Ban// \n//- Day 1 Apron Ban//";

function constructFarmScriptList()
{
	const mushFarmScript = "**This Is A:** //Farm Ship// \n\nIdentify yourselves to the rest of the crew. \n\nAs mush, your first priority should be to make sure Terrence gets infected, as well as the cat. "
	+ "(Avoid infecting the cat until either lenses are done or the Targetting Assist has been bought.) \n\nIf you're Terrence or Ian, one of you should transfer into Raluca, or into someone who REALLY wants to be Raluca. Beyond that, transferring is left to your best judgement. "
	+ "\n\nAnd remember, don't hog the spores!";
	const jinFarmScript = "**This Is A:** //Farm Ship// \n\nMake sure to take Leader \n-If you're a pilot, make sure to destroy trader ships. (Keep in mind you must bring them down to 0 before the end of the cycle.) "
	+ "\n-Set up the Swedish Sofa in the Refectory \n";
	const friedaFarmScript = "**This Is A:** //Farm Ship// \n\n-Set up the Swedish Sofa in the Refectory \n-If you're a pilot, make sure to destroy trader ships. (Keep in mind you must bring them down to 0 before the end of the cycle.)";
	const kuanFarmScript = "**This Is A:** //Farm Ship// \n\n-Make sure to take Leader \n-If Tech, get PILGRED set up \n-Set up Swedish Sofa in the Refectory";
	const janiceFarmScript = "**This Is A:** //Farm Ship// \n\n-Keep track of who is left Human \n-Set up Swedish Sofa in the Refectory";
	const rolandFarmScript = "**This Is A:** //Farm Ship// \n\n-Make sure to destroy trader ships. (Keep in mind you must bring them down to 0 before the end of the cycle.) "
	+ "\n-Buy Targetting Assist or SNC Kitchen if available \n-set up the Swedish Sofa in the Refectory";
	const huaFarmScript = "**This Is A:** //Farm Ship// \n\n-Make sure to destroy trader ships. (Keep in mind you must bring them down to 0 before the end of the cycle.) \n-If you're a Tech, get PILGRED set up "
	+ "\n-Buy Targetting Assist if available. \n-Plants should go in Refectory";
	const paolaFarmScript = "**This Is A:** //Farm Ship// \n\n-Swedish Sofa should go in the Refectory \n-Buy SNC kitchen if available. "
	+ "\n-Keep in mind, SNC kitchen can make you dirty. It's up to you if you feel can use it while decoding bases and updating NERON.";
	const chaoFarmScript = normalScript;
	const finolaFarmScript = normalScript;
	const stephenFarmScript = "**This Is A:** //Farm Ship// \n\n-Don't use Apprentice until you know you're the final Stephen \n-Consider Leader or Pilot for Apprentice \n-Build Swedish Sofa in the Refectory";
	const ianFarmScript = "**This Is A:** //Farm Ship// \n\n-Don't forget Green Thumb transfers! \n-Plants should end up in the Refectory \n-Build Swedish Sofa in the Refectory";
	const chunFarmScript = "**This Is A:** //Farm Ship// \n\n-You get dibs on the initial Magebook \n-Don't forget to take Mankinds Only Hope \n-Build Swedish Sofa in the Refectory";
	const ralucaFarmScript = "**This Is A:** //Farm Ship// \n\n-Finish PILGRED immediately \n-Build Swedish Sofa in the Refectory";
	const gioeleFarmScript = "**This Is A:** //Farm Ship// \n\n-Buy SNC Kitchen if available \nBuild Swedish Sofa in the Refectory";
	const eleeshaFarmScript = "**This Is A:** //Farm Ship// \n\n-Buy SNC Kitchen if available \n-If Tech, Help with PILGRED immediately \n-Build Swedish Sofa in the Refectory";
	const terrenceFarmScript = "**This Is A:** //Farm Ship// \n\n-Don't Forget Robotics Expert transfer! \n-Build Swedish Sofa in Refectory \n-Buy Targetting Assist or SNC Kitchen if available";
	const derekFarmScript = "**This Is A:** //Farm Ship// \n\n-Build Swedish Sofa in the Refectory \n-Be sure to check HP of folks not yet in the refectory \n-Check on plants \n-Build Sofa in Refectory";
	const andieFarmScript = "**This Is A:** //Farm Ship// \n\n-If you're a pilot, make sure to destroy trader ships. (Keep in mind you must bring them down to 0 before the end of the cycle.) "
	+ "\n-Buy Targetting Assist if available \n-Build Sofa in Refectory";
	return [mushFarmScript, jinFarmScript, friedaFarmScript, kuanFarmScript, janiceFarmScript, rolandFarmScript, huaFarmScript, paolaFarmScript, chaoFarmScript, finolaFarmScript, stephenFarmScript, 
		ianFarmScript, chunFarmScript, ralucaFarmScript, gioeleFarmScript, eleeshaFarmScript, terrenceFarmScript, derekFarmScript, andieFarmScript];
}

function replaceScripts(shipType)
{
	playerScripts = $('.rpbloc');

	playerScripts.each((i) =>
	{
		if (shipType === "normal")
		{
			playerScripts[i].children[4].innerHTML = normalScript;
			playerScripts[i].children[7].children[0].children[0].children[0].click();
		}

		else if (shipType === "farm")
		{
			playerScripts[i].children[4].innerHTML = farmShipDictonary[i];
			playerScripts[i].children[7].children[0].children[0].children[0].click();
		}

		else
		{
			throw new Error("Unexpected ship type: " + shipType +". Expected Ship Types: normal, farm.");
		}

	});

	//playerScripts[i][1]; // h3, the character that the script pertains to
	//playerScripts[i].children[4]; // The textarea for the script
	//playerScripts[i].children[7].children[0].children[0].children[0]; // The link to update the script
}

var farmShipDictonary = constructFarmScriptList();

var optionsDiv = $('.option_container')[1];
var button = $('<input type="button" value="Change The Scripts" onclick=promptUser() class="tid_button" />');
button.appendTo(optionsDiv);

function promptUser()
{
	$('#dialog').dialog({
	dialogClass: 'customScript',
	buttons: [ {
		text: 'Normal',
		click: function() {
			replaceScripts('normal');
			$(this).dialog('close');
		}
		}, {
			text: 'Farm',
			click: function() {
				replaceScripts('farm');
				$(this).dialog('close');
			}
		}]
	});
}


var node = document.createElement('style');
node.innerHTML = '.popbottom { display: none; }';
document.body.appendChild(node);