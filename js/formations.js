let f_title = document.querySelector(".f-title");
let unique_1 = document.querySelector(".unique-1");
let unique_2 = document.querySelector(".unique-2");
let list_1 = document.querySelector(".list-1");
let list_2 = document.querySelector(".list-2");
let list_add = document.querySelector(".list-add");
let f_para = document.querySelector(".f-para");
let intro = document.querySelector(".intro-add");
let image = document.querySelector(".image-top img");

let price=document.querySelector(".price");
let url = window.location.search;
let need = new URLSearchParams(url);
let value = need.get("formation");

if(value == "nutrition"){
    image.setAttribute("src" , "images/formation/FORMATION CONSEILLER(E) EN NUTRITION & DIETETIQUE.jpg")
    f_title.innerHTML=`FORMATION CONSEILLER(E) EN NUTRITION & DIETETIQUE SPECIALISE COMPLEMENTS ALIMENTAIRES`;
    f_para.innerHTML=`Apprenez à observer et écouter afin d’établir un lien entre un mode de vie, des habitudes alimentaires et des déséquilibres de santé mais également à proposer des protocoles personnalisés. Vous pourrez ainsi travailler en tant que conseiller(e) en nutrition & diététique en tant Gérant (e) de pharmacie ou parapharmacie ou salarié dans un magasin de diététique, une parapharmacie, un centre de santé ou de remise en forme, un SPA , un complexe hôtelier, une association pour la prévention santé, en restauration d’entreprise ou scolaire ainsi que tous les lieux où la demande dans le conseil pour la clientèle est importante.`;
    list_1.innerHTML=`
    <ul>
        <li>Gestionnaire de parapharmacie de vente des compléments alimentaires</li>
        <li>Gestionnaire de pharmacie de vente des compléments alimentaires</li>
        <li>Employé dans un magasin de diététique & nutrition</li>
        <li>Délégué médical des compléments alimentaires</li>
        <li>Conseiller(e) en parapharmacie ou société vente & distribution des compléments alimentaires</li>
        <li>Représentant de marque des compléments alimentaires </li>
        <li>Animateur (trice) de marque</li>
        <li>Formateur (trice)</li>
    </ul>`;
    list_2.innerHTML=`
    <ul>
        <li>Pharmacie OU Parapharmacie</li>
        <li>Distributeur ou Grossiste des compléments alimentaires </li>
        <li>Gestionnaire de Société des compléments alimentaires </li>
        <li>Fabriquant des compléments alimentaires</li>
        <li>Représentant de marque des soins amincissants et épilation </li>
        <li>Représentant de marque des soins amincissants et épilation </li>
    </ul>`;
    price.innerHTML=`PRIX INTERNATIONAL : <span class='price-number'>900</span><span style="font-zise:24px"><span class="euro">EURO</span></span>`;
}
else if( value == "cosmetique"){
    image.setAttribute("src" , "images/formation/FORMATION DERMO-CONSEILLER(E).jpg");
    f_title.innerHTML=`FORMATION DERMO-CONSEILLER(E) EN PRODUITS COSMETIQUE`;
    f_para.innerHTML=`Cette formation vous permet d’apporter des solutions de traitement ou de prévention ainsi qu’un conseil technique et personnalisé aux clients. Grâce à une analyse de leur état cutané et de leurs besoins ainsi qu’une bonne connaissance des propriétés des produits, vous aurez tous les arguments nécessaires pour réaliser une vente adaptée et pertinente en pharmacie & parapharmacie.`;
    list_1.innerHTML=`
    <ul>
        <li>Gestionnaire de parapharmacie</li>
        <li>GDélégué parapharmaceutique </li>
        <li>Conseiller(e) en parapharmacie </li>
        <li>Responsable d’un rayon hygiène-beauté</li>
        <li>Représentant de marque de produits</li>
        <li>Animateur (trice) de marque</li>
        <li>Formateur</li>
    </ul>`;
    list_2.innerHTML=`
    <ul>
        <li>parapharmacie</li>
        <li>Pharmacie</li>
        <li>Laboratoire de dermo-cosmétique</li>
        <li>Sociétés cosmétiques</li>
        <li>Rayon de parapharmacie dans la grande distribution</li>
        <li>Espace de beauté</li>
    </ul>`;
    list_add.innerHTML=`
    <ul>
        <li>Anatomie</li>
        <li>Etude des différents types de peau</li>
        <li>Appendre l’examen de la peau</li>
        <li>Le vieillissement cutané</li>
        <li>Les facteurs de vieillissement de la peau</li>
        <li>Structure et psychologie de l’épiderme, derme et hypoderme</li>
        <li>Dermatologie</li>
        <li>Les effets biologiques du soleil sur la peau</li>
        <li>Les imperfections non pathologiques</li>
        <li>Cosmétologie</li>
        <li>Les composants des produits cosmétiques</li>
        <li>Etude des différents produits pour tout type de peau
        </li>
    </ul>`;
    intro.innerHTML=`PROGRAMME : `;
    price.innerHTML=`PRIX INTERNATIONAL : <span class='price-number'>900</span> <span style="font-zise:24px"><span class="euro">EURO</span></span>`;
}
else if(value == "commercial"){
    image.setAttribute("src" , "images/formation/FORMATION COMMERCIAL MEDICAL.jpg");
    f_title.innerHTML=`FORMATION COMMERCIAL (E) MEDICAL `;
    f_para.innerHTML=`Commercial médical a pour mission d'assurer l'information médicale auprès des professionnels de santé et entretenir une relation professionnelle avec ceux-ci pour promouvoir les produits et leur bon usage dans le respect de l'éthique. L'ensemble des activités et des compétences sont mises en œuvre dans le cadre de la réglementation de ministre de la sante marocaine et des obligations légales et dans le respect la stratégie de l'entreprise.`;
    list_1.innerHTML=`
    <ul>
        <li>Commercial ou Visiteur médical  </li>
        <li>Gestionnaire de parapharmacie </li>
        <li>Gestionnaire de pharmacie </li>
        <li>Gestionnaire d’une société d’importation et distribution et vente des produits médicaux et paramédicaux  </li>
        <li>Employé dans un magasin des produits médicaux et paramédicaux  </li>
        <li>Conseiller(e) en parapharmacie ou société vente & distribution des produits médicaux et paramédicaux  </li>
        <li>Représentant de marque des produits médicaux et paramédicaux  </li>
        <li>Animateur (trice) de marque</li>
        <li>Formateur (trice)</li>

    </ul>`;
    list_2.innerHTML=`
    <ul>
        <li>Pharmacie OU Parapharmacie</li>
        <li>Distributeur ou Grossiste des produits médicaux et paramédicaux /li>
        <li>Gestionnaire de Société des des produits médicaux et paramédicaux  </li>
        <li>Fabriquant des produits médicaux et paramédicaux  </li>
    </ul>`;
    price.innerHTML=`PRIX INTERNATIONAL : <span class='price-number'>900 </span><span style="font-zise:24px"><span class="euro">EURO</span></span>`;
}
else if(value == "amincissement"){
    image.setAttribute("src" , "images/fnsh/fns.png");
    f_title.innerHTML=`FORMATION AMINCISSEMENT & ÉPILATION`;
    f_para.innerHTML=`Un programme complet, anatomique et physiologique, destiné aux professionnels parapharmaceutique ou l’esthétique et du bien -être, permettant de conseiller et de dispenser des soins amincissants ciblés, correctement adaptés aux besoins des clientes`;
    list_1.innerHTML=`
    <ul>
        <li>Gestionnaire de parapharmacie </li>
        <li>Esthéticiens </li>
        <li>Gestionnaire d’une société d’importation et distribution et vente des soins amincissants et épilation </li>
        <li>Employé dans un salon d’esthétique du bien être  </li>
        <li>Conseiller(e) en parapharmacie ou société vente & distribution des soins amincissants et épilation </li>
        <li>Représentant de marque des soins amincissants et épilation</li>
        <li>Animateur (trice) de marque</li>
        <li>Formateur (trice)</li>
    </ul>`;
    list_2.innerHTML=`
    <ul>
        <li>Parapharmacie</li>
        <li>Esthéticiens et Magasin du bien être  </li>
        <li>Distributeur ou Grossiste des produits des soins amincissants et épilation </li>
        <li>Gestionnaire de Société  des produits des soins amincissants et épilation </li>
        <li>Fabriquant des produits des soins amincissants et épilation </li>

    </ul>`;
    price.innerHTML=`PRIX INTERNATIONAL : <span class='price-number'>900</span><span style="font-zise:24px"><span class="euro">EURO</span></span>`;
}
else if(value == "disposities"){
    image.setAttribute("src" ,"images/formation/FORMATION DISPOSITIFS MEDICAUX.jpg");
    f_title.innerHTML=`FORMATION DISPOSITIFS MEDICAUX EN PRODUITS MEDICAUX `;
    f_para.innerHTML=`La formation dispositifs médicaux En produits médicaux 
    Ayant pour but de former et qualifier les candidats pour leurs futures missions de présenter et de vendre des produits médicaux (santé, beauté, hygiène...) ainsi que du matériel médical aux pharmacies, parapharmacies et établissements de Santé (cliniques, hôpitaux publics et privés, maisons de retraite...). Il faut donc des aptitudes commerciales et attitudes.
    Dispensation d'un bagage scientifique et réglementaire lié au domaine de la santé, ainsi qu'un entrainement à la vente et à la négociation.`;
    list_1.innerHTML=`
    <ul>
        <li>Gestionnaire de parapharmacie</li>
        <li>Gestionnaire d’une société de vente & distribution des produits médicaux </li>
        <li>Délégué médical</li>
        <li>Conseiller(e) en parapharmacie ou société vente & distribution des produits médicaux  </li>
        <li>Représentant de marque de produits médicaux </li>
        <li>Animateur (trice) de marque</li>
        <li>Formateur (trice)</li>
    </ul>`;
    list_2.innerHTML=`
    <ul>
        <li>Pharmacie OU Parapharmacie</li>
        <li>Distributeur ou Grossiste des produits médicaux</li>
        <li>Gestionnaire de Société des produits médicaux</li>
        <li>Fabriquant des produits paramédicaux </li>
    </ul>`;
    price.innerHTML=`PRIX INTERNATIONAL : <span class='price-number'>900</span><span style="font-zise:24px"><span class="euro">EURO</span></span>`;
};
