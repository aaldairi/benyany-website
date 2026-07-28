/*
  Benyany marketing site — copy dictionaries and behaviour.

  COPY.ar and COPY.en are carried verbatim from the design export
  `Benyany Site.dc.html`, where they live in `class Component extends DCLogic`
  as the `COPY` field. Arabic is primary there (`state = { lang: 'ar' }`) and
  is primary here: index.html ships Arabic in the markup so the page is
  complete with JavaScript off and for crawlers.

  If you edit Arabic copy, edit it in BOTH index.html and COPY.ar, or the two
  will drift the moment someone toggles the language.

  `nav` is the only key not in the export's COPY — there it is computed inside
  renderVals() as `navLabels`. The strings are unchanged.

  No dependencies.
*/
(function () {
  'use strict';

  var COPY = {
    ar: {
      skip: 'تخطَّ إلى المحتوى',
      signIn: 'تسجيل الدخول', cta: 'سجّل عملك', ctaClient: 'ابحث عن مورّد', ctaTalk: 'تحدّث إلينا',
      eyebrow: 'مسجّلة في البحرين',
      h1: 'الاتفاق يحدث في المحادثة. اجعل السجل يحدث فيها أيضاً.',
      sub: 'بنياني هي طبقة المحادثات التي يتعامل فيها العميل مع الشركة فعلياً — عروض أسعار وطلبات وتذاكر، كلها داخل نفس المحادثة، ولكل منها سجل.',
      pathBizTag: 'للشركات', pathBizTitle: 'استقبل الطلبات وسعّرها',
      pathBizBody: 'صندوق واحد لكل القنوات، مع منشئ عروض أسعار يعرض هامش الربح قبل الإرسال.',
      pathCliTag: 'للعملاء', pathCliTitle: 'اطلب سعراً من مورّد موثّق',
      pathCliBody: 'ارفع المخطط، اختر المساحات، واستلم عرضاً منظّماً يمكنك قبوله أو مناقشته.',
      howTag: 'كيف تعمل', howTitle: 'أربع خطوات، بلا مكالمات',
      prodTag: 'داخل التطبيق', prodTitle: 'الرسائل فقاعات. الاتفاقات بطاقات.',
      prodBody: 'عرض السعر سجل له حالة — يُراجع ويُقبل ويُدفع عليه. لا يجب أن يبدو كجملة كتبها أحدهم.',
      mayaTag: 'مايا · المساعد الذكي', mayaTitle: 'تردّ في الثانية صباحاً. ولا تختلق شيئاً.',
      mayaBody: 'مايا تردّ على مدار الساعة. التحويل إلى شخص هو الوحيد المرتبط بساعات العمل.',
      mayaLabel: 'مايا · تردّ الآن',
      mayaQuote: 'قرأت المخطط — ٧٦ متراً مربعاً داخل النطاق. قبل التسعير، هل الكسوة للجدار الرئيسي فقط؟',
      featTag: 'ما تحصل عليه', featTitle: 'كل ما تحتاجه المحادثة التجارية',
      trustTag: 'الثقة', trustTitle: 'شركات موثّقة بالسجل التجاري، لا نجوم فقط',
      trustBody: 'حالة التسجيل تُغني عن التقييم. نعرض السجل التجاري وعدد الأعمال المنجزة ومتوسط زمن الرد.',
      priceTag: 'الأسعار', priceTitle: 'ابدأ مجاناً. ادفع عند النمو.',
      priceSub: 'بدون عقود. للعملاء مجاناً دائماً.', popular: 'الأكثر اختياراً',
      voiceTag: 'من عملائنا', placeholderNote: 'مواضع مؤقتة — لم نستلم شهادات حقيقية بعد',
      faqTitle: 'أسئلة متكرّرة',
      endTitle: 'ابدأ باستقبال الطلبات هذا الأسبوع', endBody: 'سجّل عملك، وفّق حسابك على واتساب، وردّ من صندوق واحد.',
      footBlurb: 'طبقة المحادثات للتجارة في البحرين.', copyright: '© ٢٠٢٦ بنياني. جميع الحقوق محفوظة.',
      nav: ['للشركات', 'للعملاء', 'الأسعار', 'من نحن'],
      steps: [
        ['١', 'سجّل عملك', 'بالسجل التجاري ورقم جوال. الرقم هو هويتك في بنياني.'],
        ['٢', 'اربط قنواتك', 'واتساب وانستقرام والتطبيق تصل كلها إلى صندوق واحد.'],
        ['٣', 'دع مايا تردّ', 'على مدار الساعة، بقواعدك، وبلا اختلاق أسعار.'],
        ['٤', 'سعّر وأرسل', 'منشئ عروض بالكمية والخصم والضريبة وخطة الدفع.']
      ],
      prodPoints: [
        'عرض السعر يُراجع ويُقبل ويُناقش داخل المحادثة',
        'كل مراجعة نسخة جديدة — النسخة الأولى تبقى',
        'المخطط يُقرأ آلياً، فلا حاجة لزيارة قبل التسعير'
      ],
      mayaPoints: [
        ['check_circle', 'تصيغ طلباً منظّماً من رسالة عادية'],
        ['check_circle', 'تسعّر من قائمة أسعارك — وزر الإرسال يبقى لك'],
        ['shield', 'تقول لا أعرف بدلاً من التخمين']
      ],
      mayaChips: ['إيقاف', 'اقتراحات', 'رد تلقائي'],
      features: [
        ['forum', 'صندوق موحّد', 'واتساب وانستقرام والتطبيق في مكان واحد، مع عدّاد لكل مرشّح.'],
        ['request_quote', 'منشئ عروض الأسعار', 'الكمية والخصم والضريبة وخطة الدفع — والهامش قبل الإرسال.'],
        ['groups', 'فريق بأدوار', 'كل عضو بحسابه. التحويل مقيّد بالدور، لا يأخذه أحد بصمت.'],
        ['unknown_document', 'تذاكر في الاتجاهين', 'ارفع مشكلة أو استلمها، مع سجل زمني وأطراف مشتركة.'],
        ['schedule', 'نافذة ٢٤ ساعة', 'نوضح متى تُقيَّد الردود المجانية، ونعرض القوالب المعتمدة.'],
        ['lock', 'صدق الواجهة', 'لا حالة اتصال ولا علامات قراءة مختلقة على القنوات الخارجية.']
      ],
      trustRows: [
        ['verified', 'السجل التجاري موثّق قبل الظهور'],
        ['history', 'عدد الأعمال المنجزة ومتوسط زمن الرد'],
        ['gavel', 'بنياني يسجّل المدفوعات ولا يحوّلها']
      ],
      plans: [
        ['العميل', 'مجاناً', 'دائماً', 'ابحث، اطلب، واستلم عروضاً.', ['محادثات غير محدودة', 'طلب عرض سعر مع مخطط', 'قبول أو مناقشة العرض', 'تذاكر ومتابعة الطلبات']],
        ['الشركة', '١٩ د.ب', 'شهرياً', 'صندوق واحد ومنشئ عروض كامل.', ['كل القنوات في صندوق واحد', 'منشئ عروض بالهامش', 'مايا على مدار الساعة', 'حتى ٥ أعضاء فريق']],
        ['المؤسسة', 'حسب الطلب', '', 'لفرق متعدّدة الفروع.', ['أعضاء فريق بلا حدّ', 'أدوار وصلاحيات متقدّمة', 'تكامل مع أنظمتك', 'مدير حساب مخصّص']]
      ],
      faqs: [
        ['هل يحتاج العميل إلى حساب بنياني؟', 'لا. من يراسلك على واتساب يظل خارج المنصة بشكل دائم — نعرض اسمه الظاهر ورقمه، ويمكنه استلام عرض السعر دون تسجيل.'],
        ['هل تحوّل بنياني الأموال؟', 'لا. بنياني يسجّل حالة الدفع فقط — غير مدفوع، مستحق، مدفوع. أي تحويل فعلي يمرّ عبر مزوّد خدمة دفع مرخّص، ولا نحتفظ بأي أموال.'],
        ['ماذا لو أخطأت مايا؟', 'قيّم الرد بـ«غير صحيح»، واكتب ما كان يجب أن تقوله — يصبح قاعدة جديدة. ومايا لا تختلق سعراً أو موعداً أبداً؛ تقول إنها ستتحقّق.'],
        ['من يستطيع سحب محادثة زميل؟', 'المالك أو المشرف فقط. غير ذلك، يجب أن يعرضها المسؤول عنها أولاً — لتجنّب ردّ شخصين على نفس العميل بإجابتين.'],
        ['بأي عملة نسعّر؟', 'بعملة عملك المسجّلة فقط. البحرين بالدينار بثلاث خانات عشرية. لا تسعير بعملات أخرى حالياً.']
      ],
      badges: [['phone_iphone', 'آب ستور'], ['shop', 'جوجل بلاي']],
      footCols: [
        ['المنتج', ['للشركات', 'للعملاء', 'الأسعار', 'مايا الذكية']],
        ['الشركة', ['من نحن', 'تواصل معنا', 'الوظائف', 'المدوّنة']],
        ['قانوني', ['الشروط', 'الخصوصية', 'حماية البيانات', 'السجل التجاري']]
      ],
      quote: 'موضع لشهادة حقيقية من عميل — بانتظار نص موثّق.',
      phones: [
        { title: 'الرسائل', sub: '١٤ محادثة · ٣ بانتظارك', cardTag: 'عرض سعر', cardTitle: 'رخام كرارا · ٩٦ م²', cardKey: 'الإجمالي', cardVal: '١٩٩٢ د.ب',
          rows: [['GS', 'مؤسسة الخليج للحجر', 'مايا: قرأت المخطط…', 'ذكي', '#6B4FC7', 'rgba(107,79,199,.12)'],
                 ['AD', 'الدار للسيراميك', 'موعد التسليم مقترح', 'انتظار', '#A0820A', 'rgba(255,217,0,.24)'],
                 ['BM', 'رخام البحرين', 'عرض سعر منقّح جاهز', 'عرض', '#1FA463', 'rgba(31,164,99,.12)'],
                 ['YH', 'يوسف حسن', 'السعر أعلى بـ٢٠٪…', 'محوّل', '#E03A2F', 'rgba(224,58,47,.12)']] },
        { title: 'صندوق بنياني برو', sub: 'كل القنوات · ٦ غير مقروءة', cardTag: 'الهامش', cardTitle: 'قبل الإرسال', cardKey: 'الهامش', cardVal: '٣٢٪',
          rows: [['LA', 'ليلى المحمود', 'طلب خدمة · ٣ مساحات', 'جديد', '#1E6FB0', 'rgba(30,111,176,.12)'],
                 ['FA', 'فيصل العتيبي', 'كم سعر المتر؟', 'انستقرام', '#C13584', 'rgba(193,53,132,.12)'],
                 ['NA', 'نور عبدالله', 'أي تحديث للتسليم؟', 'واتساب', '#1FA463', 'rgba(31,164,99,.12)'],
                 ['MK', 'مريم خليفة', 'شكراً لكم', 'منجز', '#1FA463', 'rgba(31,164,99,.12)']] }
      ]
    },

    en: {
      skip: 'Skip to content',
      signIn: 'Sign in', cta: 'Register my business', ctaClient: 'Find a supplier', ctaTalk: 'Talk to us',
      eyebrow: 'Registered in Bahrain',
      h1: 'The deal happens in chat. Make the record happen there too.',
      sub: 'Benyany is the messaging layer where a customer and a business actually do business — quotations, orders and tickets, inside the conversation, each with a record.',
      pathBizTag: 'For businesses', pathBizTitle: 'Take enquiries and price them',
      pathBizBody: 'One inbox for every channel, and an offer builder that shows your margin before you send.',
      pathCliTag: 'For customers', pathCliTitle: 'Get a price from a verified business',
      pathCliBody: 'Upload the plan, pick the spaces, and get a structured quotation you can accept or question.',
      howTag: 'How it works', howTitle: 'Four steps, and no phone calls',
      prodTag: 'Inside the app', prodTitle: 'Messages are bubbles. Deals are cards.',
      prodBody: 'A quotation is a stateful record — reviewed, accepted and paid against. It must never look like something someone typed.',
      mayaTag: 'Maya · AI assistant', mayaTitle: 'Answers at 2am. Never invents.',
      mayaBody: 'Maya replies around the clock. Only escalation to a person is bounded by business hours.',
      mayaLabel: 'Maya · replying now',
      mayaQuote: 'I’ve read the plan — 76 m² in scope. Before pricing, is the panelling to the feature wall only?',
      featTag: 'What you get', featTitle: 'Everything a commercial conversation needs',
      trustTag: 'Trust', trustTitle: 'CR-verified businesses, not just star ratings',
      trustBody: 'Registration status beats a rating. We show the commercial registration, completed jobs and typical reply time.',
      priceTag: 'Pricing', priceTitle: 'Start free. Pay when it works.',
      priceSub: 'No contracts. Always free for customers.', popular: 'Most chosen',
      voiceTag: 'In their words', placeholderNote: 'Placeholders — no real testimonials supplied yet',
      faqTitle: 'Common questions',
      endTitle: 'Start taking enquiries this week', endBody: 'Register the business, connect your WhatsApp, and answer from one inbox.',
      footBlurb: 'The messaging layer for commerce in Bahrain.', copyright: '© 2026 Benyany. All rights reserved.',
      nav: ['For business', 'For customers', 'Pricing', 'About'],
      steps: [
        ['1', 'Register the business', 'With your CR and a mobile number. The number is your Benyany identity.'],
        ['2', 'Connect your channels', 'WhatsApp, Instagram and the app all arrive in one inbox.'],
        ['3', 'Let Maya answer', 'Around the clock, under your rules, and never inventing a price.'],
        ['4', 'Price it and send', 'An offer builder with quantity, discount, VAT and a payment plan.']
      ],
      prodPoints: [
        'A quotation is reviewed, accepted or questioned in the thread',
        'Every revision is a new version — v1 stays',
        'The floor plan is read for you, so no visit before pricing'
      ],
      mayaPoints: [
        ['check_circle', 'Drafts a structured request from a plain message'],
        ['check_circle', 'Prices from your rate card — you keep the send button'],
        ['shield', 'Says it doesn’t know rather than guessing']
      ],
      mayaChips: ['Off', 'Suggestions', 'Auto-reply'],
      features: [
        ['forum', 'One inbox', 'WhatsApp, Instagram and in-app together, with a count on every filter.'],
        ['request_quote', 'Offer builder', 'Quantity, discount, VAT and a payment plan — and your margin before you send.'],
        ['groups', 'A team with roles', 'Each member has their own account. Takeover is role-gated, never a silent grab.'],
        ['unknown_document', 'Tickets both ways', 'Raise an issue or receive one, with a timeline and shared parties.'],
        ['schedule', 'The 24-hour window', 'We say plainly when free replies close, and offer approved templates.'],
        ['lock', 'An honest interface', 'No invented presence or read receipts on external channels.']
      ],
      trustRows: [
        ['verified', 'Commercial registration checked before listing'],
        ['history', 'Completed jobs and typical reply time'],
        ['gavel', 'Benyany records payments; it never moves them']
      ],
      plans: [
        ['Customer', 'Free', 'always', 'Search, request, and receive quotations.', ['Unlimited conversations', 'Request a quote with a plan', 'Accept or question an offer', 'Tickets and order tracking']],
        ['Business', 'BHD 19', 'per month', 'One inbox and the full offer builder.', ['Every channel in one inbox', 'Offer builder with margin', 'Maya around the clock', 'Up to 5 team members']],
        ['Enterprise', 'Let’s talk', '', 'For multi-branch teams.', ['Unlimited team members', 'Advanced roles and permissions', 'Integrates with your systems', 'A named account manager']]
      ],
      faqs: [
        ['Does the customer need a Benyany account?', 'No. Someone messaging you on WhatsApp stays external permanently — we show their pushname and number, and they can receive a quotation without signing up.'],
        ['Does Benyany move money?', 'No. Benyany records payment status only — unpaid, due, paid. Any actual movement goes through a licensed payment provider; we never hold funds.'],
        ['What if Maya gets something wrong?', 'Mark the answer ‘not right’ and type what she should have said — it becomes a new rule. And Maya never invents a price or a date; she says she’ll check.'],
        ['Who can take over a teammate’s conversation?', 'An owner or admin. Otherwise the assignee has to offer it first — so two people never answer the same customer with different answers.'],
        ['Which currency do we quote in?', 'Your registered currency only. Bahrain quotes in BHD to three decimals. No cross-currency quoting for now.']
      ],
      badges: [['phone_iphone', 'App Store'], ['shop', 'Google Play']],
      footCols: [
        ['Product', ['For business', 'For customers', 'Pricing', 'Maya AI']],
        ['Company', ['About', 'Contact', 'Careers', 'Blog']],
        ['Legal', ['Terms', 'Privacy', 'Data protection', 'Commercial registration']]
      ],
      quote: 'Space for a real customer quote — awaiting an attributable one.',
      phones: [
        { title: 'Messages', sub: '14 conversations · 3 waiting', cardTag: 'Quotation', cardTitle: 'Carrara marble · 96 m²', cardKey: 'Total', cardVal: 'BHD 1,992',
          rows: [['GS', 'Gulf Stone Co.', 'Maya: I’ve read the plan…', 'AI', '#6B4FC7', 'rgba(107,79,199,.12)'],
                 ['AD', 'Al Dar Tiles', 'Delivery slot proposed', 'Waiting', '#A0820A', 'rgba(255,217,0,.24)'],
                 ['BM', 'Bahrain Marble', 'Revised quotation ready', 'Quote', '#1FA463', 'rgba(31,164,99,.12)'],
                 ['YH', 'Yousif Hasan', '20% higher than last week…', 'Escalated', '#E03A2F', 'rgba(224,58,47,.12)']] },
        { title: 'Benyany Pro inbox', sub: 'All channels · 6 unread', cardTag: 'Margin', cardTitle: 'Before you send', cardKey: 'Margin', cardVal: '32%',
          rows: [['LA', 'Layla Al-Mahmood', 'Service request · 3 spaces', 'New', '#1E6FB0', 'rgba(30,111,176,.12)'],
                 ['FA', 'Faisal Al-Otaibi', 'How much per metre?', 'Instagram', '#C13584', 'rgba(193,53,132,.12)'],
                 ['NA', 'Noor Abdulla', 'Any update on delivery?', 'WhatsApp', '#1FA463', 'rgba(31,164,99,.12)'],
                 ['MK', 'Mariam Khalifa', 'All good, thank you.', 'Resolved', '#1FA463', 'rgba(31,164,99,.12)']] }
      ]
    }
  };

  // ---------------------------------------------------------------- helpers

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function icon(name, cls) {
    var n = el('span', 'material-symbols-rounded' + (cls ? ' ' + cls : ''), name);
    n.setAttribute('aria-hidden', 'true');
    return n;
  }

  // Resolves a dotted path such as "nav.0" into the dictionary.
  function lookup(dict, path) {
    var parts = String(path).split('.');
    var v = dict;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }

  // ------------------------------------------------------------------ state

  var lang = 'ar';                 // the export's default
  var openFaq = {};                // mirrors the export's `state.open`

  // ----------------------------------------------------------- render parts

  function renderSteps(t) {
    var host = $('[data-list="steps"]');
    if (!host) return;
    host.textContent = '';
    t.steps.forEach(function (s) {
      var li = el('li', 'step');
      var top = el('span', 'step-top');
      top.appendChild(el('span', 'step-n', s[0]));
      top.appendChild(el('span', 'step-rule'));
      li.appendChild(top);
      li.appendChild(el('span', 'step-title', s[1]));
      li.appendChild(el('span', 'step-body', s[2]));
      host.appendChild(li);
    });
  }

  function renderTicks(sel, items, iconName, tickCls) {
    var host = $(sel);
    if (!host) return;
    host.textContent = '';
    items.forEach(function (item) {
      var pair = typeof item === 'string' ? [iconName, item] : item;
      var li = el('li');
      li.appendChild(icon(pair[0], tickCls));
      li.appendChild(el('span', null, pair[1]));
      host.appendChild(li);
    });
  }

  function renderChips(t) {
    var host = $('[data-list="mayaChips"]');
    if (!host) return;
    host.textContent = '';
    t.mayaChips.forEach(function (label) { host.appendChild(el('span', 'chip', label)); });
  }

  function renderFeatures(t) {
    var host = $('[data-list="features"]');
    if (!host) return;
    host.textContent = '';
    t.features.forEach(function (f) {
      var card = el('article', 'feat lift');
      card.appendChild(icon(f[0], 'feat-i'));
      card.appendChild(el('h3', null, f[1]));
      card.appendChild(el('p', null, f[2]));
      host.appendChild(card);
    });
  }

  function renderPhones(t) {
    var host = $('[data-phones]');
    if (!host) return;
    host.textContent = '';
    t.phones.forEach(function (p) {
      var shell = el('div', 'phone');
      var screen = el('div', 'phone-screen');

      var bar = el('div', 'phone-bar');
      bar.appendChild(el('span', 'phone-notch'));
      bar.appendChild(el('span', 'phone-title', p.title));
      bar.appendChild(el('span', 'phone-sub', p.sub));
      screen.appendChild(bar);

      var body = el('div', 'phone-body');
      p.rows.forEach(function (r) {
        var row = el('div', 'prow');
        row.appendChild(el('span', 'prow-av', r[0]));
        var mid = el('span', 'prow-mid');
        mid.appendChild(el('span', 'prow-name', r[1]));
        mid.appendChild(el('span', 'prow-msg', r[2]));
        row.appendChild(mid);
        var tag = el('span', 'prow-tag', r[3]);
        tag.style.color = r[4];
        tag.style.background = r[5];
        row.appendChild(tag);
        body.appendChild(row);
      });

      var card = el('div', 'pcard');
      card.appendChild(el('span', 'pcard-tag', p.cardTag));
      card.appendChild(el('span', 'pcard-title', p.cardTitle));
      var foot = el('span', 'pcard-foot');
      foot.appendChild(el('span', 'pcard-key', p.cardKey));
      foot.appendChild(el('span', 'pcard-val', p.cardVal));
      card.appendChild(foot);
      body.appendChild(card);

      screen.appendChild(body);
      shell.appendChild(screen);
      host.appendChild(shell);
    });
  }

  function renderPlans(t) {
    var host = $('[data-plans]');
    if (!host) return;
    host.textContent = '';
    t.plans.forEach(function (p, i) {
      var featured = i === 1;                                  // as in the export
      var card = el('div', 'plan lift' + (featured ? ' plan-featured' : ''));

      if (featured) card.appendChild(el('span', 'plan-flag', t.popular));
      card.appendChild(el('span', 'plan-name', p[0]));

      var priceRow = el('span', 'plan-price');
      priceRow.appendChild(el('span', 'plan-amount', p[1]));
      if (p[2]) priceRow.appendChild(el('span', 'plan-per', p[2]));
      card.appendChild(priceRow);

      card.appendChild(el('span', 'plan-note', p[3]));

      var lines = el('ul', 'plan-lines');
      p[4].forEach(function (line) {
        var li = el('li');
        li.appendChild(icon('check', 'plan-tick'));
        li.appendChild(el('span', null, line));
        lines.appendChild(li);
      });
      card.appendChild(lines);

      var cta = el('a', 'btn plan-cta', i === 0 ? t.ctaClient : (i === 1 ? t.cta : t.ctaTalk));
      cta.href = '#start';
      card.appendChild(cta);

      host.appendChild(card);
    });
  }

  // Deliberately unfilled: the export supplies no real testimonials and invents
  // none. The skeleton rows below are the placeholder, not a loading state.
  function renderQuotes(t) {
    var host = $('[data-quotes]');
    if (!host) return;
    host.textContent = '';
    for (var i = 0; i < 3; i++) {
      var card = el('div', 'quote');
      var stars = el('span', 'stars');
      for (var s = 0; s < 5; s++) stars.appendChild(icon('star', 'star'));
      card.appendChild(stars);
      card.appendChild(el('p', 'quote-text', t.quote));
      var attr = el('span', 'quote-attr');
      attr.appendChild(el('span', 'quote-av'));
      var bars = el('span', 'quote-bars');
      bars.appendChild(el('span', 'bar bar-1'));
      bars.appendChild(el('span', 'bar bar-2'));
      attr.appendChild(bars);
      card.appendChild(attr);
      host.appendChild(card);
    }
  }

  function renderFaq(t) {
    var host = $('[data-faq]');
    if (!host) return;
    host.textContent = '';
    t.faqs.forEach(function (f, i) {
      var isOpen = !!openFaq[i];

      var row = el('div', 'faq-row');
      var btn = el('button', 'faq-q');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.setAttribute('aria-controls', 'faq-a-' + i);
      btn.appendChild(el('span', 'faq-q-text', f[0]));
      var chev = icon('expand_more', 'faq-chev');
      if (isOpen) chev.classList.add('is-open');
      btn.appendChild(chev);

      var ans = el('div', 'faq-a', f[1]);
      ans.id = 'faq-a-' + i;
      if (!isOpen) ans.hidden = true;

      btn.addEventListener('click', function () {
        openFaq[i] = !openFaq[i];
        var nowOpen = !!openFaq[i];
        btn.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
        chev.classList.toggle('is-open', nowOpen);
        ans.hidden = !nowOpen;
      });

      row.appendChild(btn);
      row.appendChild(ans);
      host.appendChild(row);
    });
  }

  function renderBadges(t) {
    var host = $('[data-list="badges"]');
    if (!host) return;
    host.textContent = '';
    t.badges.forEach(function (b) {
      var s = el('span', 'badge');
      s.appendChild(icon(b[0]));
      s.appendChild(el('span', null, b[1]));
      host.appendChild(s);
    });
  }

  function renderFoot(t) {
    var host = $('[data-foot]');
    if (!host) return;
    host.textContent = '';
    t.footCols.forEach(function (col) {
      var c = el('div', 'foot-col');
      c.appendChild(el('h3', 'foot-col-title', col[0]));
      var ul = el('ul');
      col[1].forEach(function (label) {
        var li = el('li');
        var a = el('a', null, label);
        a.href = '#';
        li.appendChild(a);
        ul.appendChild(li);
      });
      c.appendChild(ul);
      host.appendChild(c);
    });
  }

  function renderNav(t) {
    $$('[data-t^="nav."]').forEach(function (node) {
      var v = lookup(t, node.getAttribute('data-t'));
      if (v != null) node.textContent = v;
    });
  }

  // ------------------------------------------------------------------ apply

  function apply() {
    var t = COPY[lang];
    var rtl = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-rtl', rtl);

    // Plain string slots.
    $$('[data-t]').forEach(function (node) {
      var v = lookup(t, node.getAttribute('data-t'));
      if (typeof v === 'string') node.textContent = v;
    });
    renderNav(t);

    // Direction-aware arrow, exactly as the export computes it:
    //   arrow: rtl ? 'arrow_back' : 'arrow_forward'
    $$('.arrow').forEach(function (node) { node.textContent = rtl ? 'arrow_back' : 'arrow_forward'; });

    renderSteps(t);
    renderTicks('[data-list="prodPoints"]', t.prodPoints, 'check_circle', 'tick-green');
    renderTicks('[data-list="mayaPoints"]', t.mayaPoints, null, 'tick-bright');
    renderChips(t);
    renderFeatures(t);
    renderPhones(t);
    renderTicks('[data-list="trustRows"]', t.trustRows, null, 'tick-green');
    renderPlans(t);
    renderQuotes(t);
    renderFaq(t);
    renderBadges(t);
    renderFoot(t);

    $$('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    document.title = rtl
      ? 'بنياني — طبقة المحادثات للتجارة في البحرين'
      : 'Benyany — the messaging layer for commerce in Bahrain';
  }

  // ----------------------------------------------------------------- wiring

  $$('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.getAttribute('data-lang');
      if (next === lang) return;
      lang = next;
      openFaq = {};                 // a fresh language starts with everything closed
      apply();
    });
  });

  var toggle = $('.nav-toggle');
  var mnav = $('#mnav');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      mnav.hidden = open;
      $('.material-symbols-rounded', toggle).textContent = open ? 'menu' : 'close';
    });
    $$('a', mnav).forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mnav.hidden = true;
        $('.material-symbols-rounded', toggle).textContent = 'menu';
      });
    });
  }

  apply();
})();
