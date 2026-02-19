import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Down Ampney',
  slug: 'down-ampney-roof-repairs',
  postcode: 'GL7 5',
  titleTag: 'Roof Repairs in Down Ampney (GL7)',
  metaDesc: 'Roof repair request service for Down Ampney homeowners in GL7. Submit your request and we\'ll match you with a suitable local roofer — no shared leads, no obligation.',
  ogDesc: 'Submit a roof repair request in Down Ampney, GL7. Matched with a suitable local roofing professional. No shared leads.',
  searchTerms: [
    'Roof repairs in Down Ampney',
    'Emergency roofer Down Ampney GL7',
    'Roof leak Down Ampney',
    'Ridge tile repair Down Ampney'
  ],
  h1: 'Roof Repairs & Roofing Requests in Down Ampney (GL7)',
  urgencyText: 'Roof damage or leak in Down Ampney? Submit your request and we will match you with a suitable local roofing professional serving the GL7 area — fast, no obligation.',

  intro: `
    <p>Down Ampney is a village in the far south of the GL7 postcode area, close to the Wiltshire border and the edge of the Thames flood plain. It is historically significant as the birthplace of composer Ralph Vaughan Williams, and its wartime history as the home of a major WWII airborne forces base — from which gliders left for the Arnhem operation in 1944 — gives it a character distinct from the more purely agricultural GL7 villages. The village sits on flat, open ground with little natural shelter, and this exposure has a direct bearing on how roofs age and fail here.</p>
    <p>Properties in Down Ampney range from traditional Cotswold stone cottages around the church and green, to more modern estate housing built in the decades following the wartime airfield's closure, to a number of converted agricultural buildings. Each of these property types presents different roofing challenges. The older stone cottages share the classic GL7 roofing problems of chimney deterioration, valley failure and verge erosion. Newer estate houses often have concrete interlocking tile roofs that, while durable, can develop problems with ridge bedding and individual cracked tiles as they enter middle age. Conversions tend to have complex roof geometries with multiple potential water entry points.</p>
    <p>GL7 Roof Quotes connects Down Ampney homeowners with suitable local roofing professionals through a simple online request process. We are not a roofing contractor — we are a platform focused on matching GL7 homeowners with the right local professional for their specific situation.</p>
  `,

  commonIssues: [
    { issue: 'Wind uplift in exposed position', detail: 'Down Ampney\'s flat, open setting means roof coverings — particularly on south-west facing slopes — are subject to sustained wind pressure that loosens ridge and hip mortar.' },
    { issue: 'Concrete tile ridge bedding failure', detail: 'Mid-20th century estate housing in the village frequently has concrete interlocking tiles where ridge mortar and clips have aged and require renewal.' },
    { issue: 'Chimney stack repointing', detail: 'Older stone properties near the village centre have original chimney stacks with eroded lime mortar joints that allow water ingress during prolonged rain.' },
    { issue: 'Flat and low-pitch roof failures', detail: 'Agricultural building conversions in Down Ampney often have felt or GRP flat roofs that require regular inspection and maintenance.' },
    { issue: 'Gutter and valley debris blockage', detail: 'The flat agricultural landscape means windborne debris accumulates readily in gutters and valleys, causing overflow and water ingress at eaves level.' },
    { issue: 'Flashing failures in storm conditions', detail: 'Step and cover flashings where extensions meet main roof structures are a common source of water ingress in Down Ampney\'s exposed weather conditions.' },
  ],

  localContext: `
    <p>Down Ampney's flat, open position in the GL7 Vale means it experiences some of the most exposed weather conditions of any village in the GL7 cluster. Winds that track across the open farmland to the south-west arrive at the village with little obstruction, and this has a measurable effect on roof durability. Properties on the south-western edges of the village — particularly those without the shelter of mature trees or other buildings — tend to see accelerated mortar erosion, more frequent ridge tile movement, and faster weathering of felt underlays and flat roof membranes.</p>
    <p>The village's elevation is minimal — it sits close to the 70-metre contour — but its position away from the sheltering effect of the Cotswold scarp means cold air pools here in winter, producing more frost cycles than nearby villages with more elevated or sheltered positions. The freeze-thaw cycle is one of the most damaging forces acting on masonry roofing details: chimney pots, ridge tiles, and parapet copings are all vulnerable to mortar cracking as absorbed moisture expands on freezing.</p>
    <p>Homeowners in Down Ampney who are aware of their property's exposure should consider roof maintenance as a regular priority rather than a reactive exercise. Submitting a roof inspection request through GL7 Roof Quotes — even in the absence of a visible problem — can allow a professional to identify developing issues before they become expensive emergencies.</p>
  `,

  midContent: `
    <p>Submitting a roof repair or inspection request for your Down Ampney property through GL7 Roof Quotes takes only a few minutes. You describe what you have noticed, provide your postcode, leave contact details, and optionally upload a photograph. We review the request and match you with a roofing professional who covers the Down Ampney and GL7 southern area.</p>
    <p>Your matched professional will contact you directly to discuss the problem and arrange an inspection visit. There is no obligation to proceed after the inspection, and your details go to one professional only — not to a group of competing contractors. This keeps things simple and means you get a considered, individual response rather than a flood of sales calls.</p>
    <p>For Down Ampney homeowners dealing with urgent situations — an active leak following overnight rain, missing tiles visible from the road, or a chimney pot that has shifted in high winds — the structured request process is particularly efficient. Describing the problem clearly and including a photograph (taken safely from ground level) allows a professional to assess urgency and prioritise accordingly.</p>
  `,

  closingContent: `
    <p>GL7 Roof Quotes covers Down Ampney as part of its core GL7 village network. We prioritise the GL7 postcode area, which means Down Ampney requests receive the same attention and matching care as those from larger communities like Lechlade and Fairford. We do not treat smaller villages as lower priority.</p>
    <p>Your details are never shared publicly or sold to third parties. There is no obligation to proceed after any inspection or quotation. Whether you are dealing with an urgent post-storm situation or planning proactive maintenance ahead of winter, submitting a request is the most efficient way to get a professional in contact with you.</p>
    <p>Down Ampney sits close to Lechlade, Kempsford and Meysey Hampton within the GL7 area. All of these communities are covered by our platform, and we can handle requests for multiple properties across the area if needed.</p>
  `,

  nearby: [
    { name: 'Lechlade', slug: 'lechlade-roof-repairs' },
    { name: 'Kempsford', slug: 'kempsford-roof-repairs' },
    { name: 'Meysey Hampton', slug: 'meysey-hampton-roof-repairs' },
  ],
};

export default function DownAmpneyRoofRepairs() {
  return <VillagePage data={data} />;
}
