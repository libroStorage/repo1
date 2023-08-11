const history1 = document.getElementById('history1');
const vision2 = document.getElementById('vision2');
const goals3 = document.getElementById('goals3');
const p = document.getElementById('p');

document.addEventListener('DOMContentLoaded', () => history1.click());

function setActiveTab(tab, text) {
  p.innerText = text;
  history1.style.backgroundColor =
    vision2.style.backgroundColor =
    goals3.style.backgroundColor =
      '#fff';
  tab.style.backgroundColor = '#f1f5f9';
}

history1.addEventListener('click', () => setActiveTab(history1, history1Text));
vision2.addEventListener('click', () => setActiveTab(vision2, vision2Text));
goals3.addEventListener('click', () => setActiveTab(goals3, goals3Text));

let history1Text =
  'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you sang. Parlors visited noisier how explain pleased his see suppose. Do ashamed assured on related offence at equally totally. Use mile her whom they its. Kept hold an want as he bred of. Was dashwood landlord cheerful husbands two. Estate why theirs indeed him polite old settle though she. In as at regard easily narrow roused adieus.';

let vision2Text =
  'Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is. Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.';

let goals3Text =
  'His having within saw become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake. Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. Collected preserved are middleton dependent residence but him how. Handsome weddings yet mrs you has carriage packages. Preferred joy agreement put continual elsewhere delivered now. Mrs exercise felicity had men speaking met. Rich deal mrs part led pure will but. ';
