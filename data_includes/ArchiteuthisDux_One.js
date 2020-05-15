

// Do show progress bar (fine!!)
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
        hasCorrect: 0,
        randomOrder: ['f','j'],
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


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie e menită să vă obişnuiască cu stilul de lectură."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie este un pic mai complicată decȃt propoziţia pe care aţi citit-o mai înainte."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Citiți cu atenție, avȃnd grijă să înțelegeți fiecare cuvȃnt. Hai să mai exersăm un pic."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "La bal, prinţul a valsat frumos şi a zȃmbit prinţesei."},"QuestionAlt", {q: "Cine a zȃmbit?", as: ['Prinţul','Prinţesa']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Iepurii au alergat mult aseară."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Miruna a stat toată noaptea cu fiul ei."},"QuestionAlt", {q: "Cine a stat toată noaptea cu fiul ei?", as: ['Miruna','Marina']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-interv1plverb3sg",1],DS, {s:" Cărţile de lângă noi mereu are un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",1],DS, {s:" Cărţile de lângă noi mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",1],DS, {s:" Cărţile de lângă noi mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",1],DS, {s:"Cărţile de lângă el mereu are un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",1],DS, {s:" Cărţile de lângă el mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",1],DS, {s:" Cărţile de lângă el mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",2],DS, {s:" Viorile de lângă noi mereu are arcuş maro deschis." },"QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",2],DS, {s:" Viorile de lângă noi mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",2],DS, {s:" Viorile de lângă noi mereu avem arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",2],DS, {s:"Viorile de lângă ea mereu are arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",2],DS, {s:"Viorile de lângă ea mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",2],DS, {s:" Viorile de lângă ea mereu avem arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ Ce are arcuş maro deschis?", as: ["Viorile","Ea"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",3],DS, {s:" Rochiile de lângă noi uneori are dantelă roz delicată." },"QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",3],DS, {s:" Rochiile de lângă noi uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",3],DS, {s:" Rochiile de lângă noi uneori avem dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",3],DS, {s:"Rochiile de lângă el uneori are dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",3],DS, {s:" Rochiile de lângă el uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",3],DS, {s:" Rochiile de lângă el uneori avem dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ Ce are dantelă roz delicată?", as: ["Rochiile","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",4],DS, {s:" Dulceţurile de lângă noi uneori are zahăr brun  deschis." },"QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",4],DS, {s:" Dulceţurile de lângă noi uneori au zahăr brun  deschis."}, "QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",4],DS, {s:" Dulceţurile de lângă noi uneori avem  zahăr brun  deschis."}, "QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",4],DS, {s:"Dulceţurile de lângă ea uneori are zahăr brun  deschis."}, "QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",4],DS, {s:"Dulceţurile de lângă ea uneori au zahăr brun  deschis."}, "QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",4],DS, {s:" Dulceţurile de lângă ea uneori avem zahăr brun  deschis."}, "QuestionAlt", {q: "Cine/ Ce are zahăr brun  deschis?", as: ["Dulceţurile","Ea"]}],
[["ATTRAGREEROMANIAN- interv1plverb3sg",5],DS, {s:" Pisicile de lângă noi adesea are mişcări unduitoare elegante." },"QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",5],DS, {s:" Pisicile de lângă noi adesea au mişcări unduitoare elegante."}, "QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",5],DS, {s:" Pisicile de lângă noi adesea avem mişcări unduitoare elegante."}, "QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",5],DS, {s:"Pisicile de lângă el adesea are mişcări unduitoare elegante."}, "QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",5],DS, {s:" Pisicile de lângă el adesea au mişcări unduitoare elegante."}, "QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",5],DS, {s:" Pisicile de lângă el adesea avem mişcări unduitoare elegante."}, "QuestionAlt", {q: "Cine/ Ce are mişcări unduitoare elegante?", as: ["Pisicile","El"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",6],DS, {s:" Învăţătoarele de lângă noi adesea are succes răsunător la ore." },"QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",6],DS, {s:" Învăţătoarele de lângă noi adesea au succes răsunător la ore."}, "QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",6],DS, {s:" Învăţătoarele de lângă noi adesea avem  succes răsunător la ore."}, "QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",6],DS, {s:"Învăţătoarele de lângă ea adesea are succes răsunător la ore."}, "QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",6],DS, {s:"Învăţătoarele de lângă ea adesea au succes răsunător la ore."}, "QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",6],DS, {s:" Învăţătoarele de lângă ea adesea avem succes răsunător la ore."}, "QuestionAlt", {q: "Cine/ Ce are succes răsunător la ore?", as: ["Învăţătoarele","Ea"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",7],DS, {s:" Vânzătoarele de lângă noi mereu are mulţi bani de hârtie." },"QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",7],DS, {s:" Vânzătoarele de lângă noi mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",7],DS, {s:" Vânzătoarele de lângă noi mereu avem mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",7],DS, {s:"Vânzătoarele de lângă el mereu are mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",7],DS, {s:" Vânzătoarele de lângă el mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",7],DS, {s:" Vânzătoarele de lângă el mereu avem mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine/ Ce are mulţi bani de hârtie?", as: ["Vânzătoarele","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",8],DS, {s:"Oile de lângă noi adesea are lapte foarte bun." },"QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",8],DS, {s:"Oile de lângă noi adesea au lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",8],DS, {s:"Oile de lângă noi adesea avem  lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",8],DS, {s:"Oile de lângă ea adesea are lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",8],DS, {s:"Oile de lângă ea adesea au lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",8],DS, {s:"Oile de lângă ea adesea avem lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Oile","Ea"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",9],DS, {s:" Cuţitele de lângă noi uneori are viruşi letali numeroşi." },"QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",9],DS, {s:" Cuţitele de lângă noi uneori au viruşi letali numeroşi."}, "QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",9],DS, {s:" Cuţitele de lângă noi uneori avem viruşi letali numeroşi."}, "QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",9],DS, {s:"Cuţitele de lângă el uneori are viruşi letali numeroşi."}, "QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",9],DS, {s:" Cuţitele de lângă el uneori au viruşi letali numeroşi."}, "QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",9],DS, {s:" Cuţitele de lângă el uneori avem viruşi letali numeroşi."}, "QuestionAlt", {q: "Cine/ Ce are viruşi letali numeroşi?", as: ["Cuţitele","El"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",10],DS, {s:"Tablourile de lângă noi uneori are lapte foarte bun." },"QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",10],DS, {s:"Tablourile de lângă noi uneori au lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",10],DS, {s:"Tablourile de lângă noi uneori avem  lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",10],DS, {s:"Tablourile de lângă ea uneori are lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",10],DS, {s:"Tablourile de lângă ea uneori au lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",10],DS, {s:"Tablourile de lângă ea uneori avem lapte foarte bun."}, "QuestionAlt", {q: "Cine/ Ce are lapte foarte bun?", as: ["Tablourile","Ea"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",11],DS, {s:" Nisipurile de lângă noi adesea are calciu organic granular." },"QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",11],DS, {s:" Nisipurile de lângă noi adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",11],DS, {s:" Nisipurile de lângă noi adesea avem calciu organic granular."}, "QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg ",11],DS, {s:"Nisipurile de lângă el adesea are calciu organic granular."}, "QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",11],DS, {s:" Nisipurile de lângă el adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",11],DS, {s:" Nisipurile de lângă el adesea avem calciu organic granular."}, "QuestionAlt", {q: "Cine/ Ce are calciu organic granular?", as: ["Nisipurile","El"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",12],DS, {s:"Piureurile de lângă noi mereu are piper roşu măcinat." },"QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",12],DS, {s:"Piureurile de lângă noi mereu au piper roşu măcinat."}, "QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",12],DS, {s:"Piureurile de lângă noi mereu avem  piper roşu măcinat."}, "QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",12],DS, {s:"Piureurile de lângă ea mereu are piper roşu măcinat."}, "QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",12],DS, {s:"Piureurile de lângă ea mereu au piper roşu măcinat."}, "QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",12],DS, {s:"Piureurile de lângă ea mereu avem piper roşu măcinat."}, "QuestionAlt", {q: "Cine/ Ce are piper roşu măcinat?", as: ["Piureurile","Ea"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",13],DS, {s:" Sufletele de lângă noi mereu are aripi de înger diafane." },"QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",13],DS, {s:" Sufletele de lângă noi mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",13],DS, {s:" Sufletele de lângă noi mereu avem aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",13],DS, {s:"Sufletele de lângă el mereu are aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",13],DS, {s:" Sufletele de lângă el mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",13],DS, {s:" Sufletele de lângă el mereu avem aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ Ce are aripi de înger diafane?", as: ["Sufletele","El"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",14],DS, {s:"Mamiferele de lângă noi uneori are banane verzi necoapte." },"QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",14],DS, {s:"Mamiferele de lângă noi uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",14],DS, {s:"Mamiferele de lângă noi uneori avem  banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",14],DS, {s:"Mamiferele de lângă ea uneori are banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",14],DS, {s:"Mamiferele de lângă ea uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",14],DS, {s:"Mamiferele de lângă ea uneori avem banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ Ce are banane verzi necoapte?", as: ["Mamiferele","Ea"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",15],DS, {s:" Macrourile de lângă noi adesea are icre rozalii pufoase." },"QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",15],DS, {s:" Macrourile de lângă noi adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",15],DS, {s:" Macrourile de lângă noi adesea avem icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",15],DS, {s:"Macrourile de lângă el adesea are icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",15],DS, {s:" Macrourile de lângă el adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",15],DS, {s:" Macrourile de lângă el adesea avem icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ Ce are icre rozalii pufoase?", as: ["Macrourile","El"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",16],DS, {s:"Animalele de lângă noi uneori are un entuziasm contagios." },"QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",16],DS, {s:"Animalele de lângă noi uneori au un entuziasm contagios."}, "QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",16],DS, {s:"Animalele de lângă noi uneori avem  un entuziasm contagios."}, "QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",16],DS, {s:"Animalele de lângă ea uneori are un entuziasm contagios."}, "QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",16],DS, {s:"Animalele de lângă ea uneori au un entuziasm contagios."}, "QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",16],DS, {s:"Animalele de lângă ea uneori avem un entuziasm contagios."}, "QuestionAlt", {q: "Cine/ Ce are un entuziasm contagios?", as: ["Animalele","Ea"]}],

[["ATTRAGREEROMANIAN-interv1plverb3sg",17],DS, {s:" Câinii de lângă noi adesea are o energie debordantă." },"QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",17],DS, {s:" Câinii de lângă noi adesea au o energie debordantă."}, "QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",17],DS, {s:" Câinii de lângă noi adesea avem o energie debordantă."}, "QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",17],DS, {s:"Câinii de lângă el adesea are o energie debordantă."}, "QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",17],DS, {s:" Câinii de lângă el adesea au o energie debordantă."}, "QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",17],DS, {s:" Câinii de lângă el adesea avem o energie debordantă."}, "QuestionAlt", {q: "Cine/ Ce are o energie debordantă?", as: ["Câinii ","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",18],DS, {s:"Doctorii de lângă noi uneori are multă răbdare de fier." },"QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",18],DS, {s:"Doctorii de lângă noi uneori au multă răbdare de fier."}, "QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",18],DS, {s:"Doctorii de lângă noi uneori avem  multă răbdare de fier."}, "QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",18],DS, {s:"Doctorii de lângă ea uneori are multă răbdare de fier."}, "QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",18],DS, {s:"Doctorii de lângă ea uneori au multă răbdare de fier."}, "QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",18],DS, {s:"Doctorii de lângă ea uneori avem multă răbdare de fier."}, "QuestionAlt", {q: "Cine/ Ce are multă răbdare de fier?", as: ["Doctorii","Ea"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",19],DS, {s:"Preoţii de lângă noi mereu are multă înţelepciune bătrânească." },"QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",19],DS, {s:"Preoţii de lângă noi mereu au multă înţelepciune bătrânească."}, "QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",19],DS, {s:"Preoţii de lângă noi mereu avem  multă înţelepciune bătrânească."}, "QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",19],DS, {s:"Preoţii de lângă el mereu are multă înţelepciune bătrânească."}, "QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",19],DS, {s:"Preoţii de lângă el mereu au multă înţelepciune bătrânească."}, "QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",19],DS, {s:"Preoţii de lângă el mereu avem multă înţelepciune bătrânească."}, "QuestionAlt", {q: "Cine/ Ce are multă înţelepciune bătrânească?", as: ["Preoţii","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",20],DS, {s:"Profesorii de lângă noi uneori are numeroase realizări mari." },"QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",20],DS, {s:"Profesorii de lângă noi uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",20],DS, {s:"Profesorii de lângă noi uneori avem numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",20],DS, {s:"Profesorii de lângă ea uneori are numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",20],DS, {s:"Profesorii de lângă ea uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",20],DS, {s:"Profesorii de lângă ea uneori avem numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ Ce are numeroase realizări mari?", as: ["Profesorii ","Ea"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",21],DS, {s:"Cârnaţii de lângă noi mereu are sare grunjoasă multă." },"QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",21],DS, {s:"Cârnaţii de lângă noi mereu au sare grunjoasă multă."}, "QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",21],DS, {s:"Cârnaţii de lângă noi mereu avem  sare grunjoasă multă."}, "QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",21],DS, {s:"Cârnaţii de lângă el mereu are sare grunjoasă multă."}, "QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",21],DS, {s:"Cârnaţii de lângă ea mereu au sare grunjoasă multă."}, "QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",21],DS, {s:"Cârnaţii de lângă ea mereu avem sare grunjoasă multă."}, "QuestionAlt", {q: "Cine/ Ce are sare grunjoasă multă?", as: ["Cârnaţii","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",22],DS, {s:"Buştenii  de lângă noi mereu are rezistenţă de invidiat." },"QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",22],DS, {s:"Buştenii  de lângă noi mereu au rezistenţă de invidiat."}, "QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",22],DS, {s:"Buştenii  de lângă noi mereu avem rezistenţă de invidiat."}, "QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",22],DS, {s:"Buştenii  de lângă ea mereu are rezistenţă de invidiat."}, "QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",22],DS, {s:"Buştenii  de lângă ea mereu au rezistenţă de invidiat."}, "QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",22],DS, {s:"Buştenii  de lângă ea mereu avem rezistenţă de invidiat."}, "QuestionAlt", {q: "Cine/ Ce are rezistenţă de invidiat?", as: ["Buştenii","Ea"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",23],DS, {s:"Nasturii de lângă noi adesea are aţă albastră groasă." },"QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",23],DS, {s:"Nasturii de lângă noi adesea au aţă albastră groasă."}, "QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",23],DS, {s:"Nasturii de lângă noi adesea avem  aţă albastră groasă."}, "QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",23],DS, {s:"Nasturii de lângă el adesea are aţă albastră groasă."}, "QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",23],DS, {s:"Nasturii de lângă el adesea au aţă albastră groasă."}, "QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","El"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",23],DS, {s:"Nasturii de lângă el adesea avem aţă albastră groasă."}, "QuestionAlt", {q: "Cine/ Ce are aţă albastră groasă?", as: ["Nasturii","El"]}],
[["ATTRAGREEROMANIAN-interv1plverb3sg",24],DS, {s:"Sacii  de lângă noi adesea are multe bancnote verzi." },"QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb3pl",24],DS, {s:"Sacii  de lângă noi adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Noi"]}],
[["ATTRAGREEROMANIAN- interv1plverb1pl",24],DS, {s:"Sacii  de lângă noi adesea avem multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Noi"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3sg",24],DS, {s:"Sacii  de lângă ea adesea are multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb3pl",24],DS, {s:"Sacii  de lângă ea adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Ea"]}],
[["ATTRAGREEROMANIAN- interv3sgverb1pl",24],DS, {s:"Sacii  de lângă ea adesea avem multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ Ce are multe bancnote verzi?", as: ["Sacii","Ea"]}],

[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care noi o iubim este frumoasă."}, "QuestionAlt", {q: "Cine iubeşte?", as: ["Noi", "Fata"]}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care noi o citim este interesantă. "},"QuestionAlt", {q: "Cine citeşte?", as: ["Noi","Cartea"]}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care noi îl privim este Apolodor."}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care noi o lovim este birmaneză. "}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care voi o prindeţi este maro. "}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care voi o vedeţi este verde. "}],
[["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care voi o construiţi este imensă. "}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care voi o alegeţi este mare. "}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care ei îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care ei îl hrănesc este bolnav."}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care ele îl spun este emoţionant."}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care ele îl îndrăgesc este blând. "}],
 [["filler-twonounssingularcorrectchoice",37],DS, {s:"Vinurile pe care eu le iubesc sunt seci."}],
[["filler-twonounssingularcorrectchoice",38],DS, {s:"Scrisorile pe care eu le citesc sunt lungi."}],
[["filler-twonounssingularcorrectchoice",39],DS, {s:"Girafele pe care eu le privesc sunt înalte."},"QuestionAlt", {q: "Cine priveşte?", as: ["Eu", "Girafele"]}],
[["filler-twonounssingularcorrectchoice",40],DS, {s:"Motanii pe care eu îi adăpostesc sunt tigraţi."},"QuestionAlt", {q: "Cine adăposteşte?", as: ["Eu","Motanii"]}],
[["filler-twonounssingularcorrectchoice",41],DS, {s:"Şerpii pe care tu îi striveşti sunt veninoşi."}],
[["filler-twonounssingularcorrectchoice",42],DS, {s:"Stelele pe care tu le urmăreşti sunt strălucitoare."}],
[["filler-twonounssingularcorrectchoice",43],DS, {s:"Barurile pe care tu le construieşti sunt artistice."}],
[["filler-twonounssingularcorrectchoice",44],DS, {s:"Păsările pe care tu le vezi sunt impresionante."}],
[["filler-twonounssingularcorrectchoice",45],DS, {s:"Sucurile pe care el le bea sunt dulci."}],
[["filler-twonounssingularcorrectchoice",46],DS, {s:"Pisicile pe care el le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoice",47],DS, {s:"Cuvintele pe care ea le rosteşte sunt înţelepte."}],
[["filler-twonounssingularcorrectchoice",48],DS, {s:"Câinii pe care ea îi urăşte sunt răi."}]
,

 [["filler-coordination",49],DS, {s:"Copilul şi noi bem mult suc."}],
[["filler-coordination",50],DS, {s:"Bolnavul şi noi plângem mult din cauza bolii."},"QuestionAlt", {q: "Cine plânge?", as: ["Doctorul şi bolnavul","Pacientul"]}],
[["filler-coordination",51],DS, {s:"Vulpea şi noi sǎrim în aer foarte rapid."}],
[["filler-coordination",52],DS, {s:"Puiul şi noi ciugulim firimituri adesea."},"QuestionAlt", {q: "Cine ciuguleşte?", as: ["Găina şi puiul","Puiul"]}],
[["filler-coordination",53],DS, {s:"Fata şi voi cǎdeţi de pe pat uneori."}],
[["filler-coordination",54],DS, {s:"Asasinul şi voi ucideţi iubirea adesea."}],
[["filler-coordination",55],DS, {s:"Mama şi voi susţineţi moralul fetei întotdeauna."}],
[["filler-coordination",56],DS, {s:"Pisica şi voi dormiţi după cină adesea."}],
 [["filler-coordination",57],DS, {s:"Doamna şi ei au multe flori."}],
[["filler-coordination",58],DS, {s:"Profesoara şi ei miros foarte frumos."}],
[["filler-coordination",59],DS, {s:"Domnul şi ele sunt la mare mereu."}],
[["filler-coordination",60],DS, {s:"Papagalul şi ele vorbesc foarte mult."}],

[["filler-semanticchoice",61],DS, {s:"Lampa de lângă cartea verde se aprinde uşor."}],
[["filler-semanticchoice",62],DS, {s:"Fetiţa de lângă camera albastră dansează."}],
[["filler-semanticchoice",63],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."}],
[["filler-semanticchoice",64],DS, {s:"Pasărea de lângă masa neagră cântă bine."}],
[["filler-semanticchoice",65],DS, {s:"Măgarul de lângă căţelul maro rage adesea. "},"QuestionAlt", {q: "Cine rage adesea?", as: ["Măgarul","Căţelul"]}],
[["filler-semanticchoice",66],DS, {s:"Papucii de lângă copiii bolnavi alunecă uşor."}],
[["filler-semanticchoice",67],DS, {s:"Hainele de lângă femeile zâmbăreţe cad mereu."}],
[["filler-semanticchoice",68],DS, {s:"Albinele de lângă portocalele stricate bȃzȃie prea tare."}],
[["filler-semanticchoice",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."}],
[["filler-semanticchoice",70],DS, {s:"Urşii de lângă prinţesele minunate hibernează."},"QuestionAlt", {q: "Cine hibernează?", as: ["Ursul","Prinţesele"]}],
[["filler-semanticchoice",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."}],
[["filler-semanticchoice",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}],

[["filler-onenounplagreement",73], DS, {s:"Noi adesea ne ascundem de oameni."}, "QuestionAlt", {q: "Cine se ascunde adesea?", as: ["Noi","Oamenii"]}],
[["filler-onenounplagreement",74], DS, {s:"Noi mereu distrugem natura."}],
[["filler-onenounplagreement",75], DS, {s:"Noi adesea avem trandafiri acasǎ."}],
[["filler-onenounplagreement",76], DS, {s:"Noi adesea atragem admiratori."},"QuestionAlt", {q: "Cine atrage admiratori adesea?", as: ["Noi","Ele"]}],
[["filler-onenounplagreement",77], DS, {s:"Voi mereu compuneţi melodii deosebite."}],
[["filler-onenounplagreement",78], DS, {s:"Voi mereu suferiţi foarte tare."}],
[["filler-onenounplagreement",79], DS, {s:"Voi mereu lucraţi pǎmȃntul pe timp de varǎ."}],
[["filler-onenounplagreement",80], DS, {s:"Voi adesea apǎreţi în bucătărie."}],
[["filler-onenounplagreement",81], DS, {s:"Ei mereu doresc note mari."}],
[["filler-onenounplagreement",82], DS, {s:"Ei mereu miros incredibil de frumos."}],
[["filler-onenounplagreement",83], DS, {s:"Ele adesea dau multe cadouri nepoţilor lor."}],
[["filler-onenounplagreement",84], DS, {s:"Ele mereu deschid multe uşi."}],

[["filler-onenounsgagreement",85],DS, {s:"Eu adesea mǎ ascund de prieteni."}],
[["filler-onenounsgagreement",86],DS, {s:"Eu mereu sparg vase în bucătărie."},"QuestionAlt", {q: "Cine sparge vase mereu?", as: ["Eu","Pisicile"]}],
[["filler-onenounsgagreement",87],DS, {s:"Eu am multe pagini albe la birou."}],
[["filler-onenounsgagreement",88],DS, {s:"Eu adesea atrag admiratori frumoşi."}],
[["filler-onenounsgagreement",89],DS, {s:"Tu mereu scrii foarte bine."}],
[["filler-onenounsgagreement",90],DS, {s:"Tu uneori sari cu agilitatea unui iepure."}],
[["filler-onenounsgagreement",91],DS, {s:"Tu uneori munceşti foarte mult."}],
[["filler-onenounsgagreement",92],DS, {s:"Tu adesea dispari în străinătate."}],
[["filler-onenounsgagreement",93],DS, {s:"El mereu vorbeşte foarte frumos."}],
[["filler-onenounsgagreement",94],DS, {s:"El adesea miroase foarte bine."},"QuestionAlt", {q: "Cine/Ce miroase foarte bine?", as: ["El","Mâncarea"]}],
[["filler-onenounsgagreement",95],DS, {s:"Ea adesea reţine multe informaţii."}],
[["filler-onenounsgagreement",96],DS, {s:"Ea mereu poartǎ haine de iarnă."}]
];




