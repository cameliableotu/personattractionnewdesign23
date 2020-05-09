

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
     'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server"; 

// Controller settings.
var defaults = [
    "QuestionAlt", {
      
        randomOrder: false,
        presentHorizontally: true
},
"EPDashedSentence", {
    mode: 'self-paced reading',
    display: 'in place'
}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p>Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 4000, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie e menită să vă obişnuiască cu stilul de lectură."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie este un pic mai complicată decȃt propoziţia pe care aţi citit-o mai înainte."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Citiți cu atenție, avȃnd grijă să înțelegeți fiecare cuvȃnt. Hai să mai exersăm un pic."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "La bal, prinţul a valsat frumos şi a zȃmbit prinţesei."},"QuestionAlt", {q: "Cine a zȃmbit?", as: ['Prinţul','Prinţesa','Regele','Regina']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Iepurii au alergat mult aseară."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Miruna a stat toată noaptea cu fiul ei."},"QuestionAlt", {q: "Cine a stat toată noaptea cu fiul ei?", as: ['Miruna','Marina', 'Maria','Mara']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-match1",1],DS, {s:" Cărţile de lângă noi mereu au un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",1],DS, {s:" Cărţile de lângă ei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",1],DS, {s:"Cărţile de lângă noi mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",1],DS, {s:"Cărţile de lângă ei mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-match1",2],DS, {s:"Viorile de lângă noi mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",2],DS, {s:"Viorile de lângă ele mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",2],DS, {s:"Viorile de lângă noi mereu avem arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",2],DS, {s:"Viorile de lângă ele mereu avem arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Ele"]}],
[["ATTRAGREEROMANIAN-match1",3],DS, {s:"Rochiile de lângă noi uneori au dantelă roz delicată. "},"QuestionAlt", {q: "Cine/ce are dantelă roz delicată?", as: ["Rochiile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",3],DS, {s:"Rochiile de lângă ei uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",3],DS, {s:"Rochiile de lângă noi uneori avem dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",3],DS, {s:" Rochiile de lângă ei uneori avem dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile", "Ei"]}],
[["ATTRAGREEROMANIAN-match1",4],DS, {s:"Dulceţurile de lângă noi uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",4],DS, {s:"Dulceţurile de lângă ele uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",4],DS, {s:"Dulceţurile de lângă noi uneori avem zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",4],DS, {s:"Dulceţurile de lângă ele uneori avem zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Ele"]}],


[["ATTRAGREEROMANIAN-match1",5],DS, {s:"Pisicile de lângă noi adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",5],DS, {s:"Pisicile de lângă ei adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",5],DS, {s:"Pisicile de lângă noi adesea avem mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",5],DS, {s:"Pisicile de lângă ei adesea avem mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Ei"]}],
[["ATTRAGREEROMANIAN-match1",6],DS, {s:"Învăţătoarele de lângă noi adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Noi"]}],
[["ATTRAGREEROMANIAN-match3",6],DS, {s:"Învăţătoarele de lângă ele adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",6],DS, {s:"Învăţătoarele de lângă noi adesea avem succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",6],DS, {s:"Învăţătoarele de lângă ele adesea avem succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Ele"]}],
[["ATTRAGREEROMANIAN-match1",7],DS, {s:"Vânzătoarele de lângă noi  mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Noi"]}],
[["ATTRAGREEROMANIAN-match3",7],DS, {s:"Vânzătoarele de lângă ei mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",7],DS, {s:"Vânzătoarele de lângă noi mereu avem mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",7],DS, {s:"Vânzătoarele de lângă ei mereu avem mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Ei"]}],
[["ATTRAGREEROMANIAN-match1",8],DS, {s:"Oile de lângă noi adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Noi"]}],
[["ATTRAGREEROMANIAN-match3",8],DS, {s:"Oile de lângă ele adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",8],DS, {s:"Oile de lângă noi adesea avem lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",8],DS, {s:"Oile de lângă ele adesea avem lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ele"]}],

[["ATTRAGREEROMANIAN-match1",9],DS, {s:"Cuţitele de lângă noi uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Noi"]}],
[["ATTRAGREEROMANIAN-match3",9],DS, {s:"Cuţitele de lângă ei uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",9],DS, {s:" Cuţitele de lângă noi uneori avem viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as:["Cuţitele","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",9],DS, {s:" Cuţitele de lângă ei uneori avem viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Ei"]}],
[["ATTRAGREEROMANIAN-match1",10],DS, {s:"Tablourile de lângă noi uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi? ", as: ["Tablourile","Noi"]}],   
[["ATTRAGREEROMANIAN-match3",10],DS, {s:"Tablourile de lângă ele uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Ele"]}],     
[["ATTRAGREEROMANIAN-mismatch1",10],DS, {s:"Tablourile de lângă noi uneori avem vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Noi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",10],DS, {s:"Tablourile de lângă ele uneori avem vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Ele"]}], 
[["ATTRAGREEROMANIAN-match1",11],DS, {s:"Nisipurile de lângă noi adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Noi"]}],  
[["ATTRAGREEROMANIAN-match3",11],DS, {s:"Nisipurile de lângă ei adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Ei"]}], 
[["ATTRAGREEROMANIAN-mismatch1",11],DS, {s:"Nisipurile de lângă noi adesea avem calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Noi"]}], 
[["ATTRAGREEROMANIAN-mismatch3",11],DS, {s:"Nisipurile de lângă ei adesea avem calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Ei"]}],   
[["ATTRAGREEROMANIAN-match1",12],DS, {s:"Piureurile de lângă noi mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Noi"]}],   
[["ATTRAGREEROMANIAN-match3",12],DS, {s:"Piureurile de lângă ele mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Ele"]}], 
[["ATTRAGREEROMANIAN-mismatch1",12],DS, {s:"Piureurile de lângă noi mereu avem piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile", "Noi"]}],   
[["ATTRAGREEROMANIAN-mismatch3",12],DS, {s:"Piureurile de lângă ele mereu avem piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Ele"]}],  


[["ATTRAGREEROMANIAN-match1",13],DS, {s:"Sufletele de lângă noi mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Noi"]}],     
[["ATTRAGREEROMANIAN-match3",13],DS, {s:"Sufletele de lângă ei mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as:["Sufletele","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch1",13],DS, {s:"Sufletele de lângă noi mereu avem aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Noi"]}],      
[["ATTRAGREEROMANIAN-mismatch3",13],DS, {s:"Sufletele de lângă ei mereu avem aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Ei"]}],  
[["ATTRAGREEROMANIAN-match1",14],DS, {s:"Mamiferele de lângă noi uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Noi"]}],   
[["ATTRAGREEROMANIAN-match3",14],DS, {s:"Mamiferele de lângă ele uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Ele"]}],      
[["ATTRAGREEROMANIAN-mismatch1",14],DS, {s:"Mamiferele de lângă noi uneori avem banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Noi"]}],     
[["ATTRAGREEROMANIAN-mismatch3",14],DS, {s:"Mamiferele de lângă ele uneori avem banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Ele"]}],  
[["ATTRAGREEROMANIAN-match1",15],DS, {s:"Macrourile de lângă noi adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Noi"]}],   
[["ATTRAGREEROMANIAN-match3",15],DS, {s:"Macrourile de lângă ei adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch1",15],DS, {s:"Macrourile de lângă noi adesea avem icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Noi"]}],   
[["ATTRAGREEROMANIAN-mismatch3",15],DS, {s:"Macrourile de lângă ei adesea avem icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Ei"]}],    
[["ATTRAGREEROMANIAN-match1",16],DS, {s:"Animalele de lângă noi uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Noi"]}],    
[["ATTRAGREEROMANIAN-match3",16],DS, {s:"Animalele de lângă ele uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as:["Animalele","Ele"]}],       
[["ATTRAGREEROMANIAN-mismatch1",16],DS, {s:"Animalele de lângă noi uneori avem un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Noi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",16],DS, {s:"Animalele de lângă ele uneori avem un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Ele"]}],   


[["ATTRAGREEROMANIAN-match1",17],DS, {s:"Câinii de lângă noi adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Noi"]}],    
[["ATTRAGREEROMANIAN-match3",17],DS, {s:"Câinii de lângă ei adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch1",17],DS, {s:"Câinii de lângă noi adesea avem o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Noi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",17],DS, {s:" Câinii de lângă ei adesea avem o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Ei"]}],   
[["ATTRAGREEROMANIAN-match1",18],DS, {s:"Doctorii de lângă noi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Noi"]}],   
[["ATTRAGREEROMANIAN-match3",18],DS, {s:"Doctorii de lângă ele uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Ele"]}],    
[["ATTRAGREEROMANIAN-mismatch1",18],DS, {s:"Doctorii de lângă noi uneori avem multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Noi"]}],  
[["ATTRAGREEROMANIAN-mismatch3",18],DS, {s:"Doctorii de lângă ele uneori avem multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Ele"]}],    
[["ATTRAGREEROMANIAN-match1",19],DS, {s:"Preoţii de lângă noi mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Noi"]}],
[["ATTRAGREEROMANIAN-match3",19],DS, {s:"Preoţii de lângă ei mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",19],DS, {s:"Preoţii de lângă noi mereu avem multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",19],DS, {s:"Preoţii de lângă ei mereu avem multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Ei"]}],
[["ATTRAGREEROMANIAN-match1",20],DS, {s:"Profesorii de lângă noi uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Noi"]}],
[["ATTRAGREEROMANIAN-match3",20],DS, {s:"Profesorul de lângă ele uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Ele"]}], 
[["ATTRAGREEROMANIAN-mismatch1",20],DS, {s:"Profesorii de lângă noi uneori avem numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",20],DS, {s:" Profesorii de lângă ele uneori avem numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Ele"]}],
[["ATTRAGREEROMANIAN-match1",21],DS, {s:" Cârnaţii de lângă noi mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă ?", as: ["Cârnaţii","Noi"]}],
[["ATTRAGREEROMANIAN-match3",21],DS, {s:" Cârnaţii de lângă ei mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",21],DS, {s:"Cârnaţii de lângă noi mereu avem sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnaţii","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",21],DS, {s:"Cârnaţii de lângă ei mereu avem sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnaţii","Ei"]}],
[["ATTRAGREEROMANIAN-match1",22],DS, {s:"Buştenii de lângă noi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Noi"]}],
[["ATTRAGREEROMANIAN-match3",22],DS, {s:"Buştenii de lângă ele mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",22],DS, {s:"Buştenii de lângă noi mereu avem rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",22],DS, {s:"Buştenii de lângă ele mereu avem rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Ele"]}],
[["ATTRAGREEROMANIAN-match1",23],DS, {s:"Nasturii de lângă noi adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Noi"]}],
[["ATTRAGREEROMANIAN-match3",23],DS, {s:"Nasturii de lângă ei adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch1",23],DS, {s:"Nasturii de lângă noi adesea avem aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",23],DS, {s:"Nasturii de lângă ei adesea avem aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Ei"]}],
[["ATTRAGREEROMANIAN-match1",24],DS, {s:"Sacii de lângă noi adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Noi"]}],
[["ATTRAGREEROMANIAN-match3",24],DS, {s:"Sacii de lângă ele adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch1",24],DS, {s:"Sacii de lângă noi adesea avem multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Noi"]}],
[["ATTRAGREEROMANIAN-mismatch3",24],DS, {s:"Sacii de lângă ele adesea avem multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Ele"]}],

[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}, "QuestionAlt", {q: "Cine iubeşte?", as: ["Fata","Domnul","Fetele", "Domnii" ]}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care fetele o citesc este interesantă. "},"QuestionAlt", {q: "Cine citeşte?", as: ["Fata","Cartea", "Fetele","Cărţile"]}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor."}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care bărbaţii o prind este maro. "}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care oamenii o văd este verde. "}],
[["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care contabilii o construiesc este imensă. "}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care sportivii o aleg este mare. "}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care bucătarii îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care doctorii îl hrănesc este bolnav."}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care animalele îl îndrăgesc este blând. "}]

,
 [["filler-twonounssingularcorrectchoice",37],DS, {s:"Vinurile pe care domnul le iubeşte sunt seci."}],
[["filler-twonounssingularcorrectchoice",38],DS, {s:"Scrisorile pe care fata le citeşte sunt lungi."}],
[["filler-twonounssingularcorrectchoice",39],DS, {s:"Girafele pe care copilul le priveşte sunt înalte."},"QuestionAlt", {q: "Cine priveşte?", as: ["Copilul","Girafa", "Copiii", "Girafele"]}],
[["filler-twonounssingularcorrectchoice",40],DS, {s:"Motanii pe care bunicul îi adăposteşte sunt tigraţi."},"QuestionAlt", {q: "Cine adăposteşte?", as: ["Bunicul","Motanul", "Bunicii", "Motanii"]}],
[["filler-twonounssingularcorrectchoice",41],DS, {s:"Şerpii pe care bărbatul îi striveşte sunt veninoşi."}],
[["filler-twonounssingularcorrectchoice",42],DS, {s:"Stelele pe care înţeleptul le urmăreşte sunt strălucitoare."}],
[["filler-twonounssingularcorrectchoice",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice."}],
[["filler-twonounssingularcorrectchoice",44],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante."}],
[["filler-twonounssingularcorrectchoice",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci."}],
[["filler-twonounssingularcorrectchoice",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoice",47],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."}],
[["filler-twonounssingularcorrectchoice",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi."}]
,
 [["filler-coordination",49],DS, {s:"Femeia şi copilul beau mult suc."}],
[["filler-coordination",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii."},"QuestionAlt", {q: "Cine plânge?", as: ["Doctorul","Bolnavul", "Doctorul şi bolnavul","Doctorul şi pacientul"]}],
[["filler-coordination",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid."}],
[["filler-coordination",52],DS, {s:"Găina şi puiul ciugulesc firimituri adesea."},"QuestionAlt", {q: "Cine ciuguleşte?", as: ["Găina","Puiul","Găina şi puiul","Cocoşul şi puiul"]}],
[["filler-coordination",53],DS, {s:"Paharul şi sticla cad de pe birou uneori."}],
[["filler-coordination",54],DS, {s:"Oboseala şi plictisul ucid iubirea adesea."}],
[["filler-coordination",55],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna."}],
[["filler-coordination",56],DS, {s:"Căţelul şi pisica dorm după cină adesea."}],
 [["filler-coordination",57],DS, {s:"Cafeaua şi ceaiul au efecte laxative."}],
[["filler-coordination",58],DS, {s:"Trandafirul şi zambila miros foarte frumos."}],
[["filler-coordination",59],DS, {s:"Cartea şi caietul sunt pe masă mereu."}],
[["filler-coordination",60],DS, {s:"Papagalul şi băiatul vorbesc foarte mult unul cu altul."}]
,
[["filler-semanticchoice",61],DS, {s:"Lampa de lângă cartea verde se aprinde uşor."}],
[["filler-semanticchoice",62],DS, {s:"Fetiţa de lângă camera albastră dansează."}],
[["filler-semanticchoice",63],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."}],
[["filler-semanticchoice",64],DS, {s:"Pasărea de lângă masa neagră cântă bine."}],
[["filler-semanticchoice",65],DS, {s:"Măgarul de lângă căţelul maro rage adesea. "},"QuestionAlt", {q: "Cine rage adesea?", as: ["Măgarul","Căţelul maro","Măgarii","Căţeii maro", ]}],
[["filler-semanticchoice",66],DS, {s:"Papucii de lângă copiii bolnavi alunecă uşor."}],
[["filler-semanticchoice",67],DS, {s:"Hainele de lângă femeile zâmbăreţe cad mereu."}],
[["filler-semanticchoice",68],DS, {s:"Albinele de lângă portocalele stricate bȃzȃie prea tare."}],
[["filler-semanticchoice",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."}],
[["filler-semanticchoice",70],DS, {s:"Urşii de lângă prinţesele minunate hibernează."},"QuestionAlt", {q: "Cine hibernează?", as: ["Ursul", "Prinţesa minunate", "Urşii","Prinţesele minunate"]}],
[["filler-semanticchoice",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."}],
[["filler-semanticchoice",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}],

[["filler-onenounplagreement",73], DS, {s:"Iepuraşii fricoşi se ascund de oameni adesea."}, "QuestionAlt", {q: "Cine se ascunde de oameni adesea?", as: ["Iepuraşii fricoşi","Leii fricoşi"]}],
[["filler-onenounplagreement",74], DS, {s:"Cutremurele mari distrug locuinţe tot timpul."}],
[["filler-onenounplagreement",75], DS, {s:"Grădinile japoneze au trandafiri adesea."}],
[["filler-onenounplagreement",76], DS, {s:"Fetele seducătoare atrag admiratori adesea."},"QuestionAlt", {q: "Cine atrage admiratori adesea?", as: ["Fetele seducătoare ","Femeile seducătoare"]}],
[["filler-onenounplagreement",77], DS, {s:"Muzicienii creativi compun melodii deosebite."}],
[["filler-onenounplagreement",78], DS, {s:"Rănile sufleteşti dor foarte tare."}],
[["filler-onenounplagreement",79], DS, {s:"Paharele colorate conţin suc de portocale."}],
[["filler-onenounplagreement",80], DS, {s:"Hamsterii curioşi apar în bucătărie adesea."}],
[["filler-onenounplagreement",81], DS, {s:"Elevii cuminţi doresc note mari."}],
[["filler-onenounplagreement",82], DS, {s:"Parfumurile franţuzeşti miros incredibil de frumos."}],
[["filler-onenounplagreement",83], DS, {s:"Bunicii iubitori dau multe cadouri nepoţilor lor."}],
[["filler-onenounplagreement",84], DS, {s:"Cheile verzi deschid multe uşi."}],

[["filler-onenounsgagreement",85],DS, {s:"Fata şatenă se ascunde de prieteni adesea."}],
[["filler-onenounsgagreement",86],DS, {s:"Pisica năzdrăvană sparge vase tot timpul."},"QuestionAlt", {q: "Cine sparge vase tot timpul?", as: ["Pisica năzdrăvană","Pisica simpatică", "Pisicile năzdrăvană","Pisicile simpatice"]}],
[["filler-onenounsgagreement",87],DS, {s:"Caietul negru are pagini albe."}],
[["filler-onenounsgagreement",88],DS, {s:"Magnetul maro atrage metale adesea."}],
[["filler-onenounsgagreement",89],DS, {s:"Pixul albastru scrie foarte bine."}],
[["filler-onenounsgagreement",90],DS, {s:"Iepurele alb sare cu mare agilitate."}],
[["filler-onenounsgagreement",91],DS, {s:"Studentul harnic munceşte foarte mult."}],
[["filler-onenounsgagreement",92],DS, {s:"Femeia misterioasă dispare în străinătate adesea."}],
[["filler-onenounsgagreement",93],DS, {s:"Poetul talentat vorbeşte foarte frumos."}],
[["filler-onenounsgagreement",94],DS, {s:"Mâncarea gustoasă miroase foarte bine."},"QuestionAlt", {q: "Ce miroase foarte bine?", as: ["Mâncarea gustoasă","Ea"]}],
[["filler-onenounsgagreement",95],DS, {s:"Cursul masteral cuprinde multe informaţii."}],
[["filler-onenounsgagreement",96],DS, {s:"Bagajul mare conţine haine de iarnă."}]
];
