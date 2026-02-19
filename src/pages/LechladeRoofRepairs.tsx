import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Lechlade',
  slug: 'lechlade-roof-repairs',
  postcode: 'GL7 3',
  titleTag: 'Roof Repairs in Lechlade (GL7)',
  metaDesc: 'Need a roofer in Lechlade, GL7? Submit your roof repair request online. We match homeowners with suitable local roofing professionals — no shared leads, fast response.',
  ogDesc: 'Roof repair requests for Lechlade homeowners. Matched with suitable local roofing professionals serving GL7.',
  searchTerms: [
    'Roof repairs in Lechlade GL7',
    'Emergency roofer Lechlade',
    'Roof leak repair Lechlade',
    'Chimney repair Lechlade GL7'
  ],
  h1: 'Emergency Roof Repairs in Lechlade (GL7)',
  urgencyText: 'Roof leak or storm damage in Lechlade? Submit your request and we will match you with a suitable local roofing professional — no obligation, your details never shared publicly.',

  intro: `
    <p>Lechlade-on-Thames is the highest navigable point of the River Thames and sits at the heart of the GL7 postcode area. Its historic market town character means a significant proportion of residential properties here are built from Cotswold limestone — a beautiful but demanding material when it comes to roofing. Stone slate roofs, traditional clay ridge tiles, and multi-flue chimney stacks are common across the older parts of town, and all of them require specialist understanding when problems arise.</p>
    <p>Lechlade homeowners frequently encounter roofing issues linked to the town's riverside position and age of housing stock. Damp penetration through deteriorating mortar on chimney stacks, cracked valley flashings, and tiles disturbed by seasonal freeze-thaw cycles are particularly common. Storm events tracking up the Thames valley can cause significant wind uplift to poorly bedded ridge tiles. If you have noticed water staining on ceiling plaster, damp patches near chimney breasts, or missing tiles visible from the road, submitting a roof repair request promptly can help prevent more costly structural water damage.</p>
    <p>GL7 Roof Quotes is a local roofing request platform — not a contractor. We connect homeowners in Lechlade with experienced, fully insured roofing professionals who operate in the GL7 area and understand the specific demands of local property types.</p>
  `,

  commonIssues: [
    { issue: 'Ridge tile failure', detail: 'Mortar bedding on ridge tiles deteriorates over time, particularly on older Cotswold stone homes exposed to Thames valley weather.' },
    { issue: 'Chimney stack leaks', detail: 'Lechlade\'s period properties often have original chimney stacks where flashing and pointing have aged significantly.' },
    { issue: 'Valley flashing failures', detail: 'Lead or mortar valleys between roof pitches can crack and admit water, especially on homes with complex roof profiles.' },
    { issue: 'Slate and tile displacement', detail: 'High winds tracking along the Thames valley can lift and shift individual tiles, creating gaps that allow water ingress.' },
    { issue: 'Flat roof blistering', detail: 'Garage and extension flat roofs in Lechlade are vulnerable to felt blistering and membrane failures in hot summer spells.' },
    { issue: 'Gutter overflow and fascia rot', detail: 'Blocked or undersized gutters allow water to overflow behind fascias, leading to rot and damp penetration at eaves level.' },
  ],

  localContext: `
    <p>Properties in Lechlade span several centuries of construction. The oldest homes in the town centre, particularly around the Market Square and along Burford Street, have roofs that were originally designed for Cotswold stone slate — a heavy, natural material that has largely been replaced over the decades with concrete tile or artificial slate. When re-roofing work has not been carried out to the original specification, subtle structural issues can emerge: rafters designed for the weight of stone slate sometimes bow under lighter modern materials, or conversely, original battens may not be spaced correctly for replacement tile types.</p>
    <p>The town's proximity to the River Thames also creates a specific microclimate challenge. Lechlade sits low and flat relative to the surrounding countryside, which means mist, persistent damp, and frost are common conditions in autumn and winter. Moisture trapped in roof structures — whether through inadequate ventilation or minor tile gaps — can accelerate the deterioration of timber battens, rafters and felt underlays far more quickly here than in drier inland locations. Homeowners who notice a persistently musty smell in loft spaces or condensation on cold surfaces should treat this as an early warning sign that roof ventilation or integrity may need professional assessment.</p>
    <p>If you are searching for roof repair help in Lechlade, the most practical first step is to submit a structured request through GL7 Roof Quotes. Describe the issue as clearly as you can — including whether you have noticed water ingress, visible tile displacement, or damp patches — and upload a photo if possible. This allows us to match your request with a roofing professional who has relevant experience with GL7 property types.</p>
  `,

  midContent: `
    <p>When you submit a roof repair request through GL7 Roof Quotes, the process is straightforward. You describe the issue you have noticed — whether that is a visible leak, damp patches on ceilings, missing tiles, or general concern after a storm — and provide your postcode and contact details. You can also upload photos of the problem, which helps significantly in matching your request to a professional with relevant experience.</p>
    <p>Once your request is received, we review the details and connect you with a suitable local roofing professional who covers the Lechlade area. They will contact you directly to discuss the issue, arrange an inspection, and provide a quotation. We do not share your details with multiple contractors or pass your information to national lead generation networks. Your request is handled locally, by someone who knows the GL7 area.</p>
    <p>This approach is particularly valuable for Lechlade homeowners dealing with urgent situations such as an active roof leak after heavy rain. Rather than spending time searching online directories or waiting on hold, a structured request allows you to communicate exactly what has happened, when, and where — giving a local professional the information they need to respond effectively.</p>
    <h3>What to include in your request</h3>
    <ul>
      <li>Where the problem is located on the property (front/rear, which room below)</li>
      <li>When you first noticed the issue</li>
      <li>Whether it has worsened after recent rain or wind</li>
      <li>Your full postcode in Lechlade</li>
      <li>A photo if accessible and safe to take</li>
    </ul>
  `,

  closingContent: `
    <p>GL7 Roof Quotes exists to give Lechlade homeowners a straightforward, no-pressure way to access roofing help. We are not a contractor — we are a local request platform focused entirely on the GL7 area. That means when you submit a request, it goes to a professional who actually works in this part of Gloucestershire, not a national call centre that passes leads to whoever bids highest.</p>
    <p>We prioritise GL7 postcodes, which means Lechlade requests are handled quickly. There is no obligation to proceed following an inspection or quotation, and your details are never posted publicly or sold to third parties. Whether you are dealing with a slow, persistent leak that has become worse over winter, or an urgent situation following a storm, submitting a roof repair request is the most efficient first step.</p>
    <p>Lechlade is also well-connected to surrounding GL7 villages. If your property spans a boundary, or if you are a landlord with properties across the area, our platform covers nearby villages including Fairford, Kempsford, Southrop and Down Ampney — all within the same GL7 focus area.</p>
  `,

  nearby: [
    { name: 'Fairford', slug: 'fairford-roof-repairs' },
    { name: 'Kempsford', slug: 'kempsford-roof-repairs' },
    { name: 'Down Ampney', slug: 'down-ampney-roof-repairs' },
  ],
};

export default function LechladeRoofRepairs() {
  return <VillagePage data={data} />;
}
