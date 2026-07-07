export type Language = "en" | "zh";
export type Localized<T = string> = Record<Language, T>;

export const content = {
  nav: {
    brand: "WANG JIYUE",
    links: [
      { label: { en: "Journey", zh: "经历" }, href: "/#journey" },
      { label: { en: "Cases", zh: "案例" }, href: "/#cases" },
      { label: { en: "Next", zh: "下一阶段" }, href: "/#value" },
      { label: { en: "Contact", zh: "联系" }, href: "/#contact" },
    ],
    resume: { en: "Resume", zh: "简历" },
    resumeFileName: {
      en: "BD Director-JiyueWang-EN.pdf",
      zh: "BD Director-王跻越 (随时入岗).pdf",
    },
    resumeHref: {
      en: "/resume/BD Director-JiyueWang-EN.pdf",
      zh: "/resume/BD Director-王跻越 (随时入岗).pdf",
    },
  },
  hero: {
    titleLines: {
      en: ["Turning", "Change", "into Value."],
      zh: ["将变化", "转化为", "长期价值"],
    },
    accent: { en: "Change", zh: "变化" },
    subtitle: {
      en: "I help businesses navigate changing markets, identify growth opportunities, and turn strategy into execution.",
      zh: "我关注市场、消费者和技术的变化，从中识别新的商业机会，并通过实际行动创造长期价值。",
    },
    highlights: {
      en: ["changing markets", "growth opportunities", "execution"],
      zh: ["市场", "商业机会", "实际行动"],
    },
    capability: {
      en: "Market Insight → Strategy → Execution → Growth",
      zh: "市场洞察 → 战略判断 → 商业执行 → 持续增长",
    },
    positioning: { en: "Strategy × Global Business × Technology", zh: "战略 × 全球商业 × 技术" },
    location: { en: "China · France · Finland · Middle East", zh: "中国 · 法国 · 芬兰 · 中东" },
  },
  core: {
    title: { en: "What Makes Me Different", zh: "我的核心优势" },
    intro: {
      en: [
        "My advantage is not one single experience.",
        "It is the ability to connect market insight with practical execution across changing business environments.",
        "My experiences have built four core capabilities.",
      ],
      zh: [
        "我的优势并不来自某一段单独的经历。",
        "而是能够在变化和不确定的商业环境中，将市场洞察、商业判断和实际执行连接起来。",
        "过去的经历逐渐建立了我的四项核心能力。",
      ],
    },
    cards: [
      {
        title: { en: "Market Insight", zh: "市场洞察" },
        text: {
          en: "Identifying opportunities by observing changes in markets, customer behavior, platforms, and technology.",
          zh: "通过观察市场、消费者行为、平台和技术变化，发现潜在商业机会。",
        },
      },
      {
        title: { en: "Business Building", zh: "从0到1构建业务" },
        text: {
          en: "Turning opportunities into structured business experiments, customer acquisition systems, products, services, and validated business models.",
          zh: "把市场机会转化为获客体系、产品服务以及经过真实市场验证的商业模式。",
        },
      },
      {
        title: { en: "Execution in Complexity", zh: "协调多方合作" },
        text: {
          en: "Moving projects forward when outcomes depend on multiple stakeholders, resources, constraints, and organizations.",
          zh: "在项目涉及多个利益相关者、组织、资源和限制条件时，推动项目持续向前发展。",
        },
      },
      {
        title: { en: "Global & Future-Oriented Thinking", zh: "全球视野与未来商业思维" },
        text: {
          en: "Adapting business thinking across markets while understanding how emerging technologies are changing the way organizations create value.",
          zh: "理解不同市场环境中的商业逻辑，同时持续关注新兴技术如何改变企业创造价值的方式。",
        },
      },
    ],
    system: {
      en: "Market Insight → Opportunity Identification → Strategy → Execution → Feedback → Adaptation → Long-Term Value",
      zh: "市场洞察 → 机会识别 → 战略制定 → 商业执行 → 市场反馈 → 持续调整 → 长期价值",
    },
  },
  journey: {
    title: { en: "How Change Built My Capabilities", zh: "变化如何塑造了我的能力" },
    intro: {
      en: [
        "My career has not followed a predetermined path.",
        "Each transition began with a change I observed, a limitation I recognized, or a question I wanted to answer.",
        "Each time, I moved toward a new environment where I could build the capabilities needed for the next challenge.",
      ],
      zh: [
        "我的职业经历并没有沿着一条预先设定好的路线发展。",
        "每一次转变，都来自一个我观察到的变化、意识到的能力局限，或者希望回答的问题。",
        "而每一次进入新的环境，我都试图建立应对下一阶段挑战所需要的能力。",
      ],
    },
    chapters: [
      {
        title: { en: "Finding My Direction", zh: "找到真正适合自己的方向" },
        why: {
          en: "I began by searching for the intersection between business, communication, and international environments.",
          zh: "我从寻找商业、沟通与国际环境之间的交集开始，逐渐确认真正适合自己的方向。",
        },
        capabilities: [
          { en: "Opportunity Recognition", zh: "机会识别" },
          { en: "Learning Agility", zh: "快速学习" },
          { en: "Business Communication", zh: "商务沟通" },
          { en: "International Perspective", zh: "国际视野" },
        ],
      },
      {
        title: { en: "Learning Execution", zh: "学会把事情真正落地" },
        why: {
          en: "Complex projects taught me how to align people, resources, expectations, and timing.",
          zh: "复杂项目让我学习如何协调人员、资源、预期和节奏，把想法真正推进到执行。",
        },
        capabilities: [
          { en: "Stakeholder Management", zh: "利益相关者管理" },
          { en: "Strategic Communication", zh: "战略沟通" },
          { en: "Complex Project Execution", zh: "复杂项目执行" },
          { en: "Resource Coordination", zh: "资源协调" },
          { en: "Business Development", zh: "商务拓展" },
        ],
      },
      {
        title: { en: "Building from Zero", zh: "从0开始创造业务" },
        why: {
          en: "I wanted to prove that market understanding could become a real customer acquisition and revenue system.",
          zh: "我希望证明市场理解可以被转化为真实的获客、成交和服务体系。",
        },
        capabilities: [
          { en: "Zero-to-One Business Building", zh: "从0到1搭建运营项目" },
          { en: "Social Media Operations", zh: "社媒运营" },
          { en: "Private Community Growth", zh: "私域流量运营" },
          { en: "Content Creation", zh: "内容创造" },
          { en: "Customer Management", zh: "维护客户" },
        ],
      },
      {
        title: { en: "Thinking Globally", zh: "建立全球市场能力" },
        why: {
          en: "Entering unfamiliar markets pushed me to compare platforms, customers, suppliers, and local constraints.",
          zh: "进入陌生市场让我必须比较平台、消费者、供应链和本地限制，建立可迁移的增长判断。",
        },
        capabilities: [
          { en: "Global Market Analysis", zh: "全球市场分析" },
          { en: "International Market Entry", zh: "国际市场进入" },
          { en: "Cross-Border Business Operations", zh: "跨境业务运营" },
          { en: "Supplier & Partner Management", zh: "供应商与合作伙伴管理" },
          { en: "Market Adaptability", zh: "市场适应能力" },
          { en: "Transferable Growth Thinking", zh: "可迁移增长思维" },
        ],
      },
      {
        title: { en: "Building for the Future", zh: "面向未来锻炼能力" },
        why: {
          en: "AI and new workflows changed how I think about strategy, execution, and organizational capability.",
          zh: "AI和新工作流改变了我对战略、执行和组织能力的理解，也推动我持续面向未来学习。",
        },
        capabilities: [
          { en: "AI for Business", zh: "AI商业应用" },
          { en: "Systems Thinking", zh: "系统思维" },
          { en: "Strategic Foresight", zh: "战略前瞻" },
          { en: "Continuous Learning", zh: "持续学习" },
          { en: "Workflow Design", zh: "工作流设计" },
          { en: "Innovation Mindset", zh: "创新思维" },
        ],
      },
    ],
  },
  whyNow: {
    title: {
      en: "From Creating Opportunities to Building Long-Term Value",
      zh: "从发现机会，到参与建立长期价值",
    },
    paragraphs: {
      en: [
        "My previous experiences taught me how to identify opportunities, build businesses from zero, acquire customers, enter unfamiliar markets, and move complex projects toward execution.",
        "They also changed how I think about long-term value creation.",
        "Supply-chain efficiency, marketplace traffic, cost advantages, and short-term market opportunities can create growth.",
        "But these advantages are increasingly easy to replicate.",
        "Sustainable global businesses require deeper capabilities: strong products, customer understanding, localization, brand trust, technology, operational systems, organizational capabilities, and long-term relationships with customers and partners.",
        "Building these capabilities requires more than individual experimentation.",
        "It requires solving larger business problems, collaborating with strong teams, learning from mature systems, and taking responsibility for outcomes over longer time horizons.",
        "That is why I am looking for my next opportunity now.",
        "I want to move from proving that I can create opportunities from zero to helping organizations build and scale businesses that create lasting value.",
      ],
      zh: [
        "过去的经历让我学会了如何发现机会、从0到1建立业务、获取客户、进入陌生国际市场，并在复杂环境中推动项目落地。",
        "但这些经历也改变了我对长期价值创造的理解。",
        "供应链效率、平台流量、成本优势和短期市场机会能够创造增长。",
        "但这些优势也越来越容易被复制。",
        "真正可持续的全球商业需要建立更深层的能力：优秀的产品、消费者理解、本地化能力、品牌信任、技术能力、运营系统、组织能力，以及与客户和合作伙伴之间的长期关系。",
        "而这些能力，仅仅依靠个人探索和小规模商业实验是不够的。",
        "它需要解决更大的商业问题，与优秀团队合作，理解成熟组织如何运行，并对更长期的商业结果承担责任。",
        "这也是为什么现在，我希望进入职业发展的下一阶段。",
        "过去，我证明了自己能够从0发现机会并创造业务。下一阶段，我希望参与建设和发展真正能够持续创造价值的企业。",
      ],
    },
    keywords: { en: ["Opportunity", "Long-Term Value", "Organizational Impact"], zh: ["机会", "长期价值", "组织影响力"] },
    final: {
      en: [
        "From identifying opportunities to building enduring businesses.",
        "From individual experimentation to organizational impact.",
        "From creating transactions to creating long-term value.",
      ],
      zh: ["从发现机会，到参与建设长期业务。", "从个人实验，到组织影响力。", "从创造交易，到创造长期价值。"],
    },
  },
  cases: {
    title: { en: "Proof of Capability", zh: "用真实项目证明能力" },
    intro: {
      en: [
        "The Capability Journey explains why I changed.",
        "The cases show what I can actually do.",
        "Each case represents a different business environment and a different value-creation challenge.",
      ],
      zh: [
        "Capability Journey解释我为什么发生改变，以及能力如何形成。",
        "Selected Cases则通过真实项目证明这些能力。",
        "每个案例代表一种不同的商业环境，以及一个不同的价值创造问题。",
      ],
    },
    view: { en: "View Case Study", zh: "查看案例" },
    items: [
      {
        id: "kaoba167",
        title: { en: "Kaoba 167 — Building a Content-Led Education Business from Zero", zh: "考吧167——从0建立内容驱动的线上教育业务" },
        image: "/images/cases/government-business.png",
        accent: "#1F4D3F",
        challenge: {
          en: "How can a new education business acquire customers and compete with established institutions without a strong brand or large advertising budget?",
          zh: "在没有成熟品牌和大量广告预算的情况下，一个新的教育业务如何获取客户，并与成熟培训机构竞争？",
        },
        results: {
          en: ["2,000+ private community users", "500+ paying customers", "70+ customer referrals", "Complete content-to-community-to-payment-to-referral growth system"],
          zh: ["2,000+私域用户", "500+付费客户", "70+客户转介绍", "建立“内容—私域—付费转化—服务—转介绍”增长系统"],
        },
      },
      {
        id: "uae-market-entry",
        title: { en: "UAE Cross-Border E-commerce — Entering an Unfamiliar International Market", zh: "UAE跨境电商——进入陌生国际市场" },
        image: "/images/cases/uae-market-entry.png",
        accent: "#B87955",
        challenge: {
          en: "How can a small team enter a fast-growing but unfamiliar international market while controlling inventory, logistics, and market risk?",
          zh: "一个资源有限的小团队，如何在控制库存、物流和市场风险的情况下进入一个快速增长但陌生的国际市场？",
        },
        results: {
          en: ["UAE market and competitor research", "Amazon UAE and Noon Best Seller analysis", "Multiple product categories tested", "1688 supplier development", "One best-performing SKU achieved 100+ monthly sales", "Supplier and logistics optimization"],
          zh: ["完成UAE市场与竞争分析", "分析Amazon UAE和Noon Best Seller榜单", "测试多个轻量、低成本产品品类", "通过1688开发供应商", "表现最佳单品月销量超过100件", "逐步优化供应商与跨境物流体系"],
        },
      },
      {
        id: "government-business",
        title: { en: "Government Investment Promotion — Turning Stakeholder Complexity into Project Execution", zh: "政府招商引资——将复杂利益相关者关系转化为项目执行" },
        image: "/images/cases/kaoba167.png",
        accent: "#C8A96A",
        challenge: {
          en: "How can government resources, enterprise needs, and commercial opportunities be aligned to support investment decisions and project implementation?",
          zh: "如何连接政府资源、企业需求和商业机会，降低企业投资决策的不确定性，并推动复杂项目实施？",
        },
        results: {
          en: ["100+ enterprise and government-related relationships", "RMB 200M+ commercial projects supported", "Approximately RMB 10M cultural tourism activities supported", "Participation in coordination related to RMB 1.43B urban renewal initiative", "Enterprise participation support for the Canton Fair"],
          zh: ["开发并维护100+企业及政府相关机构关系", "参与推动超2亿元商业项目", "支持约1000万元文旅商业活动", "参与约14.3亿元城市更新项目相关协调工作", "支持企业参加广交会并拓展国际业务机会"],
        },
      },
    ],
  },
  value: {
    title: { en: "Where I Can Contribute", zh: "我能为企业创造什么价值" },
    text: {
      en: "My strongest contribution comes in environments where organizations need to understand change, evaluate new opportunities, and turn strategic ideas into practical execution.",
      zh: "我最能够创造价值的环境，是企业需要理解变化、判断新机会，并把战略思考转化为实际执行的场景。",
    },
    areas: {
      en: ["Global Market Expansion", "Business Development & Strategic Partnerships", "Growth & Customer Acquisition", "Go-to-Market Strategy", "Cross-Border Business", "Localization", "AI-Enabled Business Transformation"],
      zh: ["全球市场拓展", "商务拓展与战略合作", "增长与客户获取", "GTM市场进入策略", "跨境业务", "本地化", "AI赋能商业转型"],
    },
    cards: [
      { en: "Entering New Markets", zh: "进入新市场" },
      { en: "Building Growth Systems", zh: "建立增长系统" },
      { en: "Moving Complex Projects Forward", zh: "推动复杂项目落地" },
      { en: "Building for What’s Next", zh: "面向未来建立能力" },
    ],
    chain: {
      en: "Understand Change → Identify Opportunity → Build Strategy → Execute → Learn → Adapt → Create Long-Term Value",
      zh: "理解变化 → 发现机会 → 制定战略 → 推动执行 → 获取反馈 → 持续调整 → 创造长期价值",
    },
  },
  work: {
    title: { en: "Build What’s Next Together", zh: "一起走向下一程" },
    cta: {
      en: [
        "I’m looking for meaningful problems worth committing to — and for people who want to solve them, create value, and move forward together.",
        "If you’re building for global markets, growing brands across borders, or exploring new business opportunities, perhaps we can start with a conversation.",
      ],
      zh: [
        "我仍在寻找值得长期投入的问题，也期待遇见愿意一起解决问题、创造价值的人。",
        "如果你正在推动中国品牌出海、国际市场增长，或探索新的商业机会，也许我们可以从一次交流开始。",
      ],
    },
    button: { en: "Let’s Talk", zh: "与我聊聊" },
  },
  footer: {
    name: "Wang Jiyue",
    email: "jiyuewang9@163.com",
    emailHref: "mailto:jiyuewang9@163.com",
    linkedin: "LinkedIn",
    linkedinHref: "#",
    github: "GitHub",
    githubHref: "#",
  },
} as const;

export const journeyContent = {
  title: { en: "How Change Built My Capabilities", zh: "转变如何塑造了我的能力" },
  intro: {
    en: [
      "My career has not followed a predetermined path.",
      "Each transition began with a change I observed, a limitation I recognized, or a question I wanted to answer.",
      "Each time, I moved toward a new environment where I could build the capabilities needed for the next challenge.",
    ],
    zh: [
      "我的职业经历并没有沿着一条预先设定好的路线发展。",
      "每一次转变，都来自一个我观察到的变化、意识到的能力局限，或者希望回答的问题。",
      "而每一次进入新的环境，我都试图建立应对下一阶段挑战所需要的能力。",
    ],
  },
  labels: {
    readMore: { en: "Read more", zh: "查看详情" },
    close: { en: "Close detail", zh: "收起详情" },
    why: { en: "Why I Changed", zh: "为什么改变" },
    observed: { en: "Change I Observed", zh: "我观察到的变化" },
    decision: { en: "Decision I Made", zh: "我做出的决定" },
    built: { en: "Capabilities Built", zh: "获得的能力" },
  },
  chapters: [
    {
      title: { en: "From Engineering to Business", zh: "从工科转向商业" },
      shift: {
        from: { en: "Engineering", zh: "工科" },
        to: { en: "Business", zh: "商业" },
      },
      summary: {
        en: "A real business sponsorship experience helped me identify where my strengths truly were.",
        zh: "一次真实商务实践让我发现自己真正擅长的是理解需求、协调资源并创造商业价值。",
      },
      capabilities: [
        { en: "Opportunity Recognition", zh: "机会识别" },
        { en: "Learning Agility", zh: "快速学习" },
        { en: "Business Communication", zh: "商务沟通" },
        { en: "International Perspective", zh: "国际视野" },
      ],
      detail: {
        why: {
          en: [
            "I entered Hunan University studying Material Forming and Control Engineering, following a traditional academic path. A real business sponsorship experience changed my direction.",
            "During my first year, I became responsible for sponsorship development for a major campus event. Starting without existing business relationships, I contacted companies, communicated partnership value, and independently secured sponsored work meals for the event team.",
          ],
          zh: [
            "进入湖南大学时，我最初学习的是材料成型及控制工程专业，沿着一条相对传统的学术路径前进。真正改变我方向的，是一次真实的商务实践。",
            "在参与学校大型社团活动期间，我负责商务合作。在没有现成企业资源的情况下，我主动联系企业、沟通合作价值，并独立争取到工作人员餐食赞助。",
          ],
        },
        observed: {
          en: [
            "Real-world business practice gave me clearer evidence about my strengths than assumptions about a predefined path.",
            "I discovered that I was more energized by understanding needs, connecting resources, negotiating cooperation, and creating business value than by technical product manufacturing.",
          ],
          zh: [
            "真实商业实践比预设路径更能帮助我判断自己的优势。",
            "我发现，相比技术产品本身，我更享受和擅长理解需求、连接资源、推动合作并创造商业价值。",
          ],
        },
        decision: {
          en: ["I transferred into Marketing, completed the curriculum in three years, and later studied at Audencia Business School in France."],
          zh: ["我选择转入市场营销专业，并在三年内完成专业课程，之后前往法国Audencia商学院交换学习。"],
        },
        built: [
          { title: { en: "Opportunity Recognition", zh: "机会识别" }, text: { en: "Learning to identify strengths and opportunities through real-world evidence.", zh: "通过真实实践识别自己的优势和机会。" } },
          { title: { en: "Learning Agility", zh: "快速学习" }, text: { en: "Building a new academic and professional foundation after changing disciplines.", zh: "在跨专业后快速建立新的知识体系。" } },
          { title: { en: "Business Communication", zh: "商务沟通" }, text: { en: "Learning to create cooperation through communication, negotiation, and value exchange.", zh: "通过沟通、谈判和价值交换促成合作。" } },
          { title: { en: "International Perspective", zh: "国际视野" }, text: { en: "Beginning to understand business beyond a single academic system and national context.", zh: "开始理解不同教育和商业环境中的商业逻辑。" } },
        ],
      },
    },
    {
      title: { en: "From Campus to Government", zh: "从校园走向政府" },
      shift: {
        from: { en: "Campus", zh: "校园" },
        to: { en: "Government", zh: "政府" },
      },
      summary: {
        en: "I entered a complex public-sector environment to learn how ideas become real outcomes through coordination and execution.",
        zh: "我进入真实复杂的政府工作环境，学习如何通过协调资源和持续执行把想法转化为结果。",
      },
      capabilities: [
        { en: "Stakeholder Management", zh: "利益相关者管理" },
        { en: "Strategic Communication", zh: "战略沟通" },
        { en: "Complex Project Execution", zh: "复杂项目执行" },
        { en: "Resource Coordination", zh: "资源协调" },
        { en: "Business Development", zh: "商务拓展" },
      ],
      detail: {
        why: {
          en: [
            "After finding my direction in business and marketing, I wanted to understand how ideas become real outcomes inside complex organizations.",
            "I had learned how businesses analyze markets and identify opportunities. But I wanted to learn something more difficult: how to move projects forward when multiple stakeholders have different interests, resources, constraints, and decision-making processes.",
          ],
          zh: [
            "找到商业和市场营销方向之后，我希望理解一个更加现实的问题：商业想法如何在复杂组织中真正转化为结果？",
            "我已经学习了企业如何分析市场和识别机会，但我想学习更难的部分：当项目涉及多个利益相关方、资源、限制条件和决策流程时，如何推动事情向前发展。",
          ],
        },
        observed: {
          en: [
            "Good strategies do not create value automatically.",
            "Value is created when people, interests, and resources can be aligned toward implementation.",
          ],
          zh: [
            "战略本身不会自动创造价值。",
            "只有当不同的人、利益和资源能够被协调，并最终推动事情落地时，价值才真正产生。",
          ],
        },
        decision: {
          en: ["I entered government investment promotion and business environment development to learn how complex projects move forward in reality."],
          zh: ["我进入政府招商引资和营商环境相关岗位，学习复杂项目在现实环境中如何推进。"],
        },
        built: [
          { title: { en: "Stakeholder Management", zh: "利益相关者管理" }, text: { en: "Understanding different interests and building alignment across organizations.", zh: "理解不同组织的利益诉求，并建立协同。" } },
          { title: { en: "Strategic Communication", zh: "战略沟通" }, text: { en: "Adapting communication to different stakeholders, objectives, and decision-making processes.", zh: "根据不同对象、目标和决策机制调整沟通方式。" } },
          { title: { en: "Complex Project Execution", zh: "复杂项目执行" }, text: { en: "Maintaining project momentum across multiple participants and changing constraints.", zh: "在多方参与和限制变化中保持项目推进。" } },
          { title: { en: "Resource Coordination", zh: "资源协调" }, text: { en: "Connecting public resources, enterprises, brands, venues, and partners.", zh: "连接公共资源、企业、品牌、场地和合作方。" } },
          { title: { en: "Business Development", zh: "商务拓展" }, text: { en: "Identifying cooperation opportunities and building long-term organizational relationships.", zh: "识别合作机会，并建立长期组织关系。" } },
        ],
      },
    },
    {
      title: { en: "From a Stable Career to Entrepreneurship", zh: "从稳定职业走向创业" },
      shift: {
        from: { en: "Stable Career", zh: "稳定职业" },
        to: { en: "Entrepreneurship", zh: "创业" },
      },
      summary: {
        en: "I left a structured environment to test whether I could create value without an existing platform or customer base.",
        zh: "我离开确定性更强的职业环境，验证自己能否在没有成熟平台和现成客户的情况下创造价值。",
      },
      capabilities: [
        { en: "Zero-to-One Business Building", zh: "从0到1业务构建" },
        { en: "Customer Insight", zh: "客户洞察" },
        { en: "Customer Acquisition", zh: "客户获取" },
        { en: "Content-Led Growth", zh: "内容驱动增长" },
        { en: "Business Model Validation", zh: "商业模式验证" },
        { en: "Referral Growth", zh: "转介绍增长" },
      ],
      detail: {
        why: {
          en: [
            "After learning how to execute within an existing system, I wanted to answer a different question:",
            "Could I create value without an established organization, existing customer base, or predefined project?",
          ],
          zh: [
            "在已有组织体系中学习如何推动事情落地之后，我开始思考另一个问题：",
            "如果没有成熟组织、现成客户和已经定义好的项目，我还能不能创造价值？",
          ],
        },
        observed: {
          en: [
            "China's employment environment was changing. Competition for stable career opportunities was increasing, civil service examinations were attracting growing attention, and content platforms were changing how candidates searched for information and learning support.",
            "Traditional training institutions had strong brands and established distribution channels, but smaller operators could compete through useful content, direct customer relationships, and differentiated services.",
          ],
          zh: [
            "就业环境正在变化，稳定职业机会竞争加剧，考公需求持续受到关注。同时，内容平台正在改变考生获取学习信息和选择教育服务的方式。",
            "传统培训机构拥有品牌和渠道优势，但小型创业者也可以通过有价值的内容、直接客户关系和差异化服务获得机会。",
          ],
        },
        decision: {
          en: ["I built Kaoba 167 from zero, using content, private community operations, paid conversion, and customer referrals to validate a complete business model."],
          zh: ["我从0开始建立考吧167，通过内容获客、私域运营、付费转化和客户转介绍验证完整商业模式。"],
        },
        built: [
          { title: { en: "Zero-to-One Business Building", zh: "从0到1业务构建" }, text: { en: "Turning an observed market opportunity into a functioning business.", zh: "将观察到的市场机会转化为真实业务。" } },
          { title: { en: "Customer Insight", zh: "客户洞察" }, text: { en: "Identifying unmet needs through direct interaction and market observation.", zh: "通过用户互动和市场观察识别未满足需求。" } },
          { title: { en: "Customer Acquisition", zh: "客户获取" }, text: { en: "Building organic channels to reach and attract potential customers.", zh: "建立自然流量渠道，获取潜在用户。" } },
          { title: { en: "Content-Led Growth", zh: "内容驱动增长" }, text: { en: "Using valuable content to create attention, trust, and demand.", zh: "通过有价值的内容创造注意力、信任和需求。" } },
          { title: { en: "Business Model Validation", zh: "商业模式验证" }, text: { en: "Testing whether customer demand could be converted into sustainable revenue.", zh: "验证用户需求能否转化为可持续收入。" } },
          { title: { en: "Referral Growth", zh: "转介绍增长" }, text: { en: "Turning customer experience and satisfaction into an additional acquisition channel.", zh: "将客户体验和满意度转化为新的获客渠道。" } },
        ],
      },
    },
    {
      title: { en: "From China to Global Markets", zh: "从中国市场走向全球市场" },
      shift: {
        from: { en: "China", zh: "中国市场" },
        to: { en: "Global Markets", zh: "全球市场" },
      },
      summary: {
        en: "I tested whether capabilities built in China could create value in an unfamiliar international market.",
        zh: "我进入陌生国际市场，验证在中国建立的能力能否跨市场迁移并创造价值。",
      },
      capabilities: [
        { en: "Global Market Analysis", zh: "全球市场分析" },
        { en: "International Market Entry", zh: "国际市场进入" },
        { en: "Cross-Border Operations", zh: "跨境运营" },
        { en: "Supplier & Partner Management", zh: "供应商与合作伙伴管理" },
        { en: "Market Adaptability", zh: "市场适应能力" },
        { en: "Transferable Growth Thinking", zh: "可迁移增长思维" },
      ],
      detail: {
        why: {
          en: [
            "After validating a business model in China, I wanted to understand whether my capabilities could work in a completely unfamiliar market.",
            "Building Kaoba 167 proved that I could identify demand, acquire customers, and create a business from zero. But the business depended heavily on one domestic market, one customer segment, and my understanding of China's platforms and consumer environment.",
          ],
          zh: [
            "在中国市场验证了一个商业模式之后，我希望回答一个新的问题：",
            "如果进入一个完全陌生的国际市场，我已经建立的能力是否仍然能够创造价值？",
            "考吧167证明了我能够识别需求、获取客户并从0建立业务。但这个业务也依赖一个国内市场、一个用户群体，以及我对中国平台和消费环境的理解。",
          ],
        },
        observed: {
          en: ["Chinese manufacturing capabilities and supply chains were increasingly connecting with global demand, while overseas e-commerce platforms created new opportunities for small cross-border sellers."],
          zh: ["中国制造能力和供应链正在与全球需求更紧密连接，同时海外电商平台为小型跨境卖家创造了新的测试机会。"],
        },
        decision: {
          en: ["Together with my business partner, I researched overseas markets and selected the UAE as an initial test market based on e-commerce growth, consumer purchasing power, platform maturity, and market conditions."],
          zh: ["我和创业伙伴研究海外市场，并基于电商增长、消费者购买力、平台成熟度和市场条件，选择UAE作为初期测试市场。"],
        },
        built: [
          { title: { en: "Global Market Analysis", zh: "全球市场分析" }, text: { en: "Evaluating opportunities across unfamiliar markets using customer, platform, competition, and operational information.", zh: "基于用户、平台、竞争和运营信息评估陌生市场机会。" } },
          { title: { en: "International Market Entry", zh: "国际市场进入" }, text: { en: "Turning market research into practical market-entry decisions and experiments.", zh: "将市场研究转化为实际市场进入决策和实验。" } },
          { title: { en: "Cross-Border Business Operations", zh: "跨境业务运营" }, text: { en: "Understanding how products, suppliers, platforms, customers, and logistics interact.", zh: "理解产品、供应商、平台、客户和物流之间的关系。" } },
          { title: { en: "Supplier & Partner Management", zh: "供应商与合作伙伴管理" }, text: { en: "Building external relationships required for cross-border execution.", zh: "建立跨境业务执行所需的外部合作关系。" } },
          { title: { en: "Market Adaptability", zh: "市场适应能力" }, text: { en: "Adjusting assumptions based on local customer behavior and market feedback.", zh: "根据本地用户行为和市场反馈调整假设。" } },
          { title: { en: "Transferable Growth Thinking", zh: "可迁移增长思维" }, text: { en: "Understanding which growth principles can transfer across markets and which require localization.", zh: "判断哪些增长原则可以迁移，哪些需要本地化。" } },
        ],
      },
    },
    {
      title: { en: "From Global Business to a Technology-Driven Future", zh: "从全球商业走向技术驱动的未来" },
      shift: {
        from: { en: "Global Business", zh: "全球商业" },
        to: { en: "Technology-Driven Future", zh: "技术驱动的未来" },
      },
      summary: {
        en: "I began exploring how AI can reshape business research, workflows, decision-making, and value creation.",
        zh: "我开始探索AI如何改变商业研究、工作流、决策方式和企业创造价值的方式。",
      },
      capabilities: [
        { en: "AI for Business", zh: "AI商业应用" },
        { en: "Systems Thinking", zh: "系统思维" },
        { en: "Strategic Foresight", zh: "战略前瞻" },
        { en: "Continuous Learning", zh: "持续学习" },
        { en: "Workflow Design", zh: "工作流设计" },
        { en: "Innovation Mindset", zh: "创新思维" },
      ],
      detail: {
        why: {
          en: [
            "After working across different organizations, business models, and international markets, I began observing another structural shift:",
            "AI was changing the economics of knowledge work.",
          ],
          zh: [
            "经历不同组织、商业模式和国际市场之后，我开始观察到另一个更加深层的变化：",
            "AI正在改变知识工作的成本结构和企业运行方式。",
          ],
        },
        observed: {
          en: ["Market research could be accelerated, large amounts of information could be analyzed faster, business workflows could be redesigned, and small teams could build and test ideas with capabilities that previously required much larger organizations."],
          zh: ["市场研究可以被加速，大量信息可以更快被分析，商业流程可以被重新设计，小型团队也能够拥有过去只有大型组织才能获得的能力。"],
        },
        decision: {
          en: ["I pursued graduate study in Finland while exploring how AI could support market research, strategy development, workflow automation, and business execution."],
          zh: ["我前往芬兰攻读硕士，同时持续探索AI如何应用于市场研究、商业战略、工作流自动化和业务执行。"],
        },
        built: [
          { title: { en: "AI for Business", zh: "AI商业应用" }, text: { en: "Understanding emerging technology through the problems it can solve and the value it can create.", zh: "从商业问题和价值创造角度理解新兴技术。" } },
          { title: { en: "Systems Thinking", zh: "系统思维" }, text: { en: "Connecting markets, customers, technology, operations, and organizational capabilities.", zh: "连接市场、客户、技术、运营和组织能力。" } },
          { title: { en: "Strategic Foresight", zh: "战略前瞻" }, text: { en: "Identifying structural changes and considering their long-term business implications.", zh: "识别结构性变化，并思考其长期商业影响。" } },
          { title: { en: "Continuous Learning", zh: "持续学习" }, text: { en: "Building new capabilities as technologies and markets evolve.", zh: "随着技术和市场变化不断建立新能力。" } },
          { title: { en: "Workflow Design", zh: "工作流设计" }, text: { en: "Using technology to improve how information is collected, analyzed, and transformed into action.", zh: "使用技术改进信息收集、分析和转化为行动的方式。" } },
          { title: { en: "Innovation Mindset", zh: "创新思维" }, text: { en: "Testing new approaches through experimentation rather than relying only on existing methods.", zh: "通过实验验证新方法，而不是只依赖既有经验。" } },
        ],
      },
    },
  ],
} as const;

export const nextValueContent = {
  title: {
    en: "Next Chapter — From Individual Exploration to Organizational Impact",
    zh: "下一阶段：从个人探索到组织价值",
  },
  subtitle: {
    en: "Moving from creating opportunities independently to helping organizations build long-term growth.",
    zh: "从独立探索商业机会，走向在组织中参与建设长期增长。",
  },
  whyTitle: { en: "Why This Transition", zh: "为什么进入下一阶段" },
  valueTitle: { en: "Where I Can Contribute", zh: "我能贡献的方向" },
  why: {
    en: [
      "My previous experiences taught me how to identify opportunities, build from zero, acquire customers, enter unfamiliar markets, and move complex projects toward execution.",
      "They also changed how I think about long-term value creation.",
      "Identifying opportunities and completing transactions are only the beginning of business.",
      "Supply-chain efficiency, marketplace traffic, cost advantages, and short-term market opportunities can create growth, but these advantages are increasingly easy to replicate.",
      "Sustainable global businesses require deeper capabilities: strong products, customer understanding, localization, brand trust, technology, operational systems, organizational capabilities, and long-term relationships.",
      "These capabilities are difficult to build through individual experimentation alone.",
      "That is why I want to enter a larger business system, collaborate with strong teams, solve more complex problems, and take responsibility for longer-term business outcomes.",
      "I have proven that I can identify opportunities and build from zero.",
      "My next goal is to help organizations build businesses that create lasting value.",
    ],
    zh: [
      "过去的经历让我学会了如何发现机会、从0到1建立业务、获取客户、进入陌生国际市场，并在复杂环境中推动项目落地。",
      "这些经历也让我逐渐意识到，发现机会和完成交易只是商业的开始。",
      "供应链效率、平台流量、成本优势和短期市场机会都可以带来增长，但这些优势也越来越容易被复制。",
      "真正可持续的全球商业，需要更深层的能力：优秀产品、消费者理解、本地化能力、品牌信任、技术能力、运营系统、组织能力，以及与客户和合作伙伴之间的长期关系。",
      "这些能力很难只依靠个人探索或小规模实验完成。",
      "因此，我希望进入一个更大的商业系统，与优秀团队合作，参与解决更复杂的问题，并对更长期的商业结果承担责任。",
      "过去，我证明了自己能够从0发现机会并创造业务。",
      "下一阶段，我希望参与建设真正能够持续创造价值的企业。",
    ],
  },
  valueIntro: {
    en: "I can contribute across:",
    zh: "我能够在以下方向创造价值：",
  },
  areas: {
    en: [
      "Global Market Expansion",
      "Business Development & Strategic Partnerships",
      "Growth & Customer Acquisition",
      "Go-to-Market Strategy",
      "Cross-Border Business",
      "Localization",
      "AI-Enabled Business Transformation",
    ],
    zh: [
      "全球市场拓展",
      "商务拓展与战略合作",
      "增长与客户获取",
      "GTM市场进入策略",
      "跨境业务",
      "本地化",
      "AI赋能商业转型",
    ],
  },
  final: {
    en: [
      "From individual exploration to organizational impact.",
      "From creating opportunities to building long-term value.",
    ],
    zh: [
      "从个人探索，到组织价值。",
      "从发现机会，到建设长期增长。",
    ],
  },
} as const;

export const caseProofs = {
  kaoba167: {
    title: { en: "Capabilities Proven & Business Value", zh: "证明的能力与商业价值" },
    capabilities: {
      en: ["Customer Insight", "Zero-to-One Business Building", "Content-Led Growth", "Customer Segmentation", "Service Design", "Growth Funnel Design", "Business Model Validation", "Customer Experience", "Referral Growth"],
      zh: ["客户洞察", "从0到1业务构建", "内容驱动增长", "用户分层", "服务设计", "增长漏斗设计", "商业模式验证", "客户体验", "转介绍增长"],
    },
    businessValue: {
      en: "This case demonstrates my ability to identify underserved customer needs and turn market insight into a functioning business system. I did not compete by copying established institutions. I identified specific customer constraints, designed differentiated services, built an organic acquisition channel, and connected customer experience with referral growth.",
      zh: "这个案例证明了我能够识别没有被充分满足的用户需求，并将市场洞察转化为真实运转的业务系统。我没有简单复制成熟培训机构的模式，而是识别具体用户限制，设计差异化服务，建立自然获客渠道，并将客户体验与转介绍增长连接起来。",
    },
  },
  "uae-market-entry": {
    title: { en: "Capabilities Proven & Business Value", zh: "证明的能力与商业价值" },
    capabilities: {
      en: ["International Market Entry", "Marketplace Research", "Best Seller Analysis", "Competitive Analysis", "Product Opportunity Evaluation", "Resource-Constrained Experimentation", "Supplier Development", "Cross-Border Operations", "Logistics Coordination", "Operational Adaptation"],
      zh: ["国际市场进入", "平台研究", "Best Seller分析", "竞争分析", "产品机会评估", "有限资源下的商业实验", "供应商开发", "跨境运营", "物流协调", "运营适应能力"],
    },
    businessValue: {
      en: "This case demonstrates my ability to enter an unfamiliar market without relying on perfect information. I can use market data, marketplace signals, competitor research, and operational constraints to make practical business decisions. Rather than choosing products randomly, I built a structured product selection process based on demand visibility, sourcing advantage, platform fit, and risk control.",
      zh: "这个案例证明了我能够在信息不完全的情况下进入陌生市场。我能够结合市场数据、平台信号、竞品研究和运营约束做出实际商业决策。我们并不是随机选品，而是基于需求可见性、供应链优势、平台适配度和风险控制建立结构化选品流程。",
    },
  },
  "government-business": {
    title: { en: "Capabilities Proven & Business Value", zh: "证明的能力与商业价值" },
    capabilities: {
      en: ["Stakeholder Management", "Business Development", "Enterprise Research", "Market & Regional Analysis", "Strategic Communication", "Government-Enterprise Collaboration", "Resource Coordination", "Complex Project Execution", "Problem Structuring", "Long-Term Relationship Management"],
      zh: ["利益相关者管理", "商务拓展", "企业研究", "市场与区域分析", "战略沟通", "政企协作", "资源协调", "复杂项目执行", "问题结构化", "长期关系维护"],
    },
    businessValue: {
      en: "This case demonstrates my ability to operate in complex environments where business outcomes depend on multiple organizations. I can use market and organizational information to understand opportunities, identify stakeholder needs, connect relevant resources, reduce execution friction, and maintain project momentum.",
      zh: "这个案例证明了我能够在结果依赖多个组织的复杂环境中开展工作。我能够利用市场和组织信息理解机会，识别利益相关方需求，连接相关资源，降低执行摩擦，并保持项目推进。",
    },
  },
} as const;

export const caseDetails = [
  {
    id: "kaoba167",
    title: {
      en: "Building Kaoba 167 from Zero",
      zh: "从0建立考吧167线上教育业务",
    },
    subtitle: {
      en: "Building a content-led education business through organic acquisition, private community conversion, differentiated services, and referral growth.",
      zh: "通过内容获客、私域转化、差异化服务和客户转介绍，从0建立线上教育业务。",
    },
    image: "/images/cases/government-business.png",
    meta: [
      { label: { en: "Category", zh: "类别" }, value: { en: "Education Entrepreneurship", zh: "线上教育创业" } },
      { label: { en: "Market", zh: "市场" }, value: { en: "China", zh: "中国" } },
      {
        label: { en: "Focus", zh: "重点" },
        value: {
          en: "Content-led Growth / Private Community / Business Model Validation",
          zh: "内容增长 / 私域运营 / 商业模式验证",
        },
      },
    ],
    metrics: [
      { en: "2,000+ private community users", zh: "2,000+ 私域用户" },
      { en: "500+ paying customers", zh: "500+ 付费客户" },
      { en: "70+ customer referrals", zh: "70+ 客户转介绍" },
    ],
    sections: [
      {
        title: { en: "Overview", zh: "项目概览" },
        body: {
          en: [
            "Kaoba 167 was a content-driven online civil service education business built from zero. The project connected public-platform content, private community operations, paid service conversion, and customer referrals into a complete organic growth system.",
          ],
          zh: [
            "考吧167是一个从0开始搭建的线上考公教育项目。项目通过公域内容获客、微信私域沉淀、付费服务转化和客户转介绍，形成了完整的自然增长闭环。",
          ],
        },
      },
      {
        title: { en: "Business Challenge", zh: "商业挑战" },
        body: {
          en: [
            "The online civil service education market was highly competitive. Large training institutions had established brands, mature distribution channels, content teams, and significant marketing resources.",
            "I started without these advantages: no existing audience, no established brand, and no large advertising budget.",
            "The real challenge was not simply producing educational content. It was finding underserved customer needs and building a sustainable acquisition and monetization system around them.",
          ],
          zh: [
            "线上考公教育市场竞争激烈。大型培训机构拥有成熟品牌、分发渠道、内容团队和营销资源。",
            "项目初期，我没有现成用户、成熟品牌和大量广告预算。",
            "真正的挑战并不是简单生产教育内容，而是找到没有被充分满足的用户需求，并围绕这些需求建立可持续的获客和转化系统。",
          ],
        },
      },
      {
        title: { en: "Insight", zh: "关键洞察" },
        body: {
          en: [
            "I observed two important changes. First, content platforms were changing how candidates discovered educational information and services. Users increasingly searched Xiaohongshu, Douyin, and Bilibili for exam strategies, policy explanations, learning methods, and practical advice.",
            "Second, the existing education market left several customer needs underserved. Price-sensitive self-learners wanted structured recorded courses but could not justify the price of major institutions. Time-constrained working candidates needed flexible schedules, personalized guidance, and direct feedback.",
            "The opportunity was not to compete with established institutions by offering more content. It was to serve specific customer constraints with a more flexible and accessible business model.",
          ],
          zh: [
            "我观察到两个重要变化。第一，内容平台正在改变考公用户获取教育信息和选择服务的方式。越来越多用户通过小红书、抖音和B站搜索备考策略、政策解读、学习方法和实用建议。",
            "第二，现有培训市场仍然存在没有被充分满足的用户需求。价格敏感型自学用户需要结构化录播课程，但难以承担大型机构的较高价格；时间受限的在职考生需要更灵活的时间安排、个性化指导和直接反馈。",
            "因此，机会并不是简单生产更多内容，而是用更灵活、更可负担的服务模式满足具体用户需求。",
          ],
        },
      },
      {
        title: { en: "Strategy / Approach", zh: "策略与方法" },
        body: {
          en: [
            "I designed the business around three connected choices: organic content acquisition, differentiated service design, and customer relationship-driven referral growth.",
            "For price-sensitive self-learners, I created an affordable recorded-course package with human assignment feedback. For working candidates with limited time, I offered flexible one-to-one online coaching.",
            "The complete business logic became: Content → Attention → Trust → Customer Segmentation → Differentiated Service → Conversion → Service Delivery → Satisfaction → Referral.",
          ],
          zh: [
            "我围绕三个战略选择设计业务：内容自然获客、差异化服务设计，以及基于客户关系的转介绍增长。",
            "针对价格敏感型自学用户，推出更可负担的录播课程包，并加入人工批改反馈；针对时间受限的在职用户，提供灵活的一对一线上指导。",
            "完整业务逻辑为：内容 → 注意力 → 信任 → 用户分层 → 差异化服务 → 付费转化 → 服务交付 → 客户满意 → 转介绍。",
          ],
        },
      },
      {
        title: { en: "What I Did", zh: "我具体做了什么" },
        body: {
          en: [
            "I created and operated Kaoba 167 across Xiaohongshu, Douyin, and Bilibili. Content included policy updates, exam-related public discussions, employment topics, interview preparation, written examination strategies, learning frameworks, common mistakes, and practical guidance.",
            "After attracting users through public platforms, I guided interested users into private communities where I answered questions, observed needs, shared useful information, and identified potential customers.",
            "I converted users by matching services with actual needs rather than promoting the same product to every user. Service quality then became another acquisition channel as satisfied customers referred friends and other candidates.",
          ],
          zh: [
            "我在小红书、抖音和B站搭建并运营考吧167账号矩阵。内容包括政策变化、考公相关公共讨论、就业话题、面试备考、申论和行测策略、学习框架、常见错误和实用建议。",
            "在公域平台吸引用户后，我将感兴趣的用户引导进入微信私域社群，在私域中持续答疑、观察需求、分享有价值的信息，并识别潜在付费客户。",
            "转化过程中，我不是向所有用户推同一种产品，而是根据用户真实需求匹配对应服务。服务质量也成为新的获客渠道，满意学员会推荐朋友或其他考生。",
          ],
        },
      },
      {
        title: { en: "Operating System", zh: "运营系统" },
        body: {
          en: [
            "Content Acquisition Loop: Useful Content → Organic Reach → User Interaction → Private Community.",
            "Conversion Loop: Customer Interaction → Needs Identification → Customer Segmentation → Differentiated Offer → Paid Conversion.",
            "Referral Loop: Service Delivery → Customer Satisfaction → Referral → New Customer Acquisition → Further Conversion.",
          ],
          zh: [
            "内容获客循环：有价值内容 → 自然曝光 → 用户互动 → 私域沉淀。",
            "转化循环：客户互动 → 需求识别 → 用户分层 → 差异化服务 → 付费转化。",
            "转介绍循环：服务交付 → 客户满意 → 用户推荐 → 新客户获取 → 进一步转化。",
          ],
        },
      },
      {
        title: { en: "Results", zh: "结果" },
        body: {
          en: [
            "Built Kaoba 167 from zero across Xiaohongshu, Douyin, and Bilibili.",
            "Converted more than 2,000 users into private communities, acquired more than 500 paying customers, and generated more than 70 customer referrals.",
            "Established a complete organic growth system connecting content acquisition, customer segmentation, paid conversion, service delivery, and referral growth.",
          ],
          zh: [
            "从0搭建考吧167在小红书、抖音和B站的内容账号矩阵。",
            "累计将2,000+用户转化进入私域社群，获得500+付费用户和70+客户转介绍。",
            "形成连接内容获客、用户分层、付费转化、服务交付和转介绍增长的完整自然增长系统。",
          ],
        },
      },
      {
        title: { en: "Capabilities Proven", zh: "证明的能力" },
        body: {
          en: ["Customer Insight / Zero-to-One Business Building / Content-Led Growth / Customer Segmentation / Service Design / Growth Funnel Design / Business Model Validation / Customer Experience / Referral Growth"],
          zh: ["客户洞察 / 从0到1业务构建 / 内容驱动增长 / 用户分层 / 服务设计 / 增长漏斗设计 / 商业模式验证 / 客户体验 / 转介绍增长"],
        },
      },
      {
        title: { en: "What This Proves", zh: "这个案例证明了什么" },
        body: {
          en: [
            "This case demonstrates my ability to identify underserved customer needs and turn market insight into a functioning business system.",
            "I did not compete by copying established institutions. I identified specific customer constraints, designed differentiated services, built an organic acquisition channel, and connected customer experience with referral growth.",
          ],
          zh: [
            "这个案例证明了我能够识别没有被充分满足的用户需求，并将市场洞察转化为真实运转的业务系统。",
            "我没有简单复制成熟培训机构的模式，而是识别具体用户限制，设计差异化服务，建立自然获客渠道，并将客户体验与转介绍增长连接起来。",
          ],
        },
      },
    ],
  },
  {
    id: "uae-market-entry",
    title: {
      en: "Entering the UAE Market Through Cross-Border E-commerce",
      zh: "通过跨境电商进入UAE市场",
    },
    subtitle: {
      en: "Using marketplace signals, Best Seller analysis, 1688 sourcing, and small-scale product testing to validate opportunities in an unfamiliar international market.",
      zh: "通过平台信号、Best Seller分析、1688供应商筛选和小规模产品测试，在陌生国际市场验证商业机会。",
    },
    image: "/images/cases/uae-market-entry.png",
    meta: [
      { label: { en: "Category", zh: "类别" }, value: { en: "International Market Entry", zh: "国际市场进入" } },
      { label: { en: "Market", zh: "市场" }, value: { en: "UAE", zh: "阿联酋" } },
      { label: { en: "Period", zh: "时间" }, value: { en: "2022.11 - 2023.03", zh: "2022.11 - 2023.03" } },
      {
        label: { en: "Focus", zh: "重点" },
        value: {
          en: "Marketplace Research / Product Testing / Cross-Border Operations",
          zh: "平台研究 / 产品测试 / 跨境运营",
        },
      },
    ],
    metrics: [
      { en: "Amazon UAE & Noon research", zh: "Amazon UAE 与 Noon 平台研究" },
      { en: "1688 supplier development", zh: "1688供应商开发" },
      { en: "100+ monthly sales for best-performing SKU", zh: "表现最佳单品月销量100+" },
      { en: "End-to-end sourcing-to-feedback process", zh: "建立从选品到反馈复盘的完整流程" },
    ],
    sections: [
      {
        title: { en: "Overview", zh: "项目概览" },
        body: {
          en: [
            "This case focused on entering the UAE market through cross-border e-commerce. The project used platform research, Amazon UAE and Noon Best Seller analysis, 1688 sourcing, low-risk product testing, and logistics optimization to validate product opportunities in an unfamiliar international market.",
          ],
          zh: [
            "这个案例聚焦于通过跨境电商进入UAE市场。项目通过平台研究、Amazon UAE和Noon Best Seller分析、1688供应商筛选、低风险产品测试和物流优化，在陌生国际市场验证产品机会。",
          ],
        },
      },
      {
        title: { en: "Business Challenge", zh: "商业挑战" },
        body: {
          en: [
            "In November 2022, entering the UAE market meant operating in an unfamiliar but fast-growing business environment with different consumers, platforms, purchasing behaviors, cultural preferences, logistics systems, and operational risks.",
            "The challenge was not simply selling Chinese products overseas. It was learning how to evaluate an international opportunity, select the right market, test products through real platforms, and build a cross-border operating model without committing excessive resources before understanding local demand.",
          ],
          zh: [
            "2022年11月进入UAE市场，意味着进入一个陌生但快速发展的商业环境。这里有不同的消费者、平台、购买行为、文化偏好、物流体系和运营风险。",
            "真正的挑战并不是简单把中国产品卖到海外，而是在没有完全了解当地需求之前，如何评估国际市场机会、选择合适市场、通过真实平台测试产品，并在控制资源投入的情况下建立跨境运营模型。",
          ],
        },
      },
      {
        title: { en: "Insight", zh: "关键洞察" },
        body: {
          en: [
            "The UAE offered a better balance between consumer purchasing power, marketplace infrastructure, and relatively less saturated competition for small cross-border sellers than highly competitive Western markets.",
            "Market potential alone did not make the business viable. Cash-on-delivery behavior in parts of the Middle East could increase refused deliveries, returns, logistics cost, and working capital pressure.",
            "Early-stage product selection therefore needed to balance demand visibility, competition, sourcing advantage, and operational risk. The goal was to maximize learning while controlling the cost of failure.",
          ],
          zh: [
            "与北美和西欧等高度成熟且竞争激烈的市场相比，UAE在消费者购买力、平台基础设施和相对竞争饱和度之间形成了更适合小型跨境卖家的平衡。",
            "市场潜力本身并不等于商业模式可行。中东部分电商市场仍然存在货到付款偏好，这可能增加拒收、退货、物流成本和资金周转压力。",
            "因此，早期选品需要同时平衡需求可见性、竞争情况、供应链优势和运营风险。目标不是最大化短期收入，而是在控制失败成本的同时最大化学习。",
          ],
        },
      },
      {
        title: { en: "Strategy / Approach", zh: "策略与方法" },
        body: {
          en: [
            "I used a structured market-entry logic: select the UAE market, study Amazon UAE and Noon, analyze Best Seller products, identify categories with visible demand, evaluate Chinese sourcing feasibility, test low-cost lightweight products, and optimize based on real sales feedback.",
            "Product evaluation considered demand, competition, sourcing cost, shipping difficulty, cultural relevance, platform fit, return risk, and supplier flexibility.",
          ],
          zh: [
            "我采用结构化市场进入逻辑：选择UAE市场，研究Amazon UAE和Noon，分析Best Seller产品，识别有可见需求的品类，评估中国供应链可行性，测试低成本轻量产品，并根据真实销售反馈优化。",
            "选品评估维度包括需求、竞争、采购成本、运输难度、文化相关性、平台适配度、退货风险和供应商灵活性。",
          ],
        },
      },
      {
        title: { en: "What I Did", zh: "我具体做了什么" },
        body: {
          en: [
            "I researched UAE e-commerce platforms and competitors, especially Amazon UAE and Noon Best Seller rankings, to understand demand patterns, pricing, category opportunities, and competitive intensity.",
            "I screened product categories suitable for small-scale testing, including lightweight, low-cost, easy-to-ship consumer products and items aligned with local aesthetic or cultural preferences.",
            "I sourced through 1688, communicated with suppliers about price, quality, minimum order flexibility, shipping speed, and fulfillment feasibility, then participated in listing, pricing review, customer feedback analysis, sales monitoring, and product iteration.",
            "As we learned from the market, we moved from flexible early fulfillment toward more stable supplier relationships and freight-forwarder coordination.",
          ],
          zh: [
            "我研究UAE电商平台和竞品，尤其是Amazon UAE和Noon Best Seller榜单，理解需求模式、价格区间、品类机会和竞争强度。",
            "我筛选适合小规模测试的品类，包括轻量、低成本、易运输的消费品，以及符合当地审美或文化偏好的产品。",
            "我通过1688寻找供应商，并与厂家沟通价格、质量、最低采购灵活性、发货速度和履约可行性，同时参与商品上架、定价复盘、客户反馈分析、销售监测和产品迭代。",
            "随着市场经验积累，我们从早期灵活履约逐步转向更稳定的供应商关系，并通过货代协调优化物流效率、成本结构和运营稳定性。",
          ],
        },
      },
      {
        title: { en: "Operating System", zh: "运营系统" },
        body: {
          en: [
            "UAE Market Selection → Amazon UAE & Noon Best Seller Research → Category and Competitor Analysis → Product Opportunity Evaluation → 1688 Supplier Development → Small-Scale Product Testing → Listing and Fulfillment → Customer Feedback and Sales Review → Product Iteration → Supplier and Logistics Optimization.",
          ],
          zh: [
            "UAE市场选择 → Amazon UAE与Noon Best Seller研究 → 类目与竞品分析 → 产品机会评估 → 1688供应商开发 → 小规模产品测试 → 商品上架与履约 → 客户反馈和销售复盘 → 产品迭代 → 供应商与物流优化。",
          ],
        },
      },
      {
        title: { en: "Results", zh: "结果" },
        body: {
          en: [
            "Completed UAE market and platform competitor research, and selected Amazon UAE and Noon as initial market-entry platforms.",
            "Used Best Seller analysis to guide category selection, tested multiple lightweight and cost-efficient product categories, built supplier relationships through 1688, and established an end-to-end process from market selection and product sourcing to listing, fulfillment, feedback, and optimization.",
            "One best-performing SKU achieved more than 100 monthly sales. Supplier development and freight-forwarder coordination improved operational stability.",
          ],
          zh: [
            "完成UAE市场和平台竞品研究，选择Amazon UAE和Noon作为初期市场进入平台。",
            "使用Best Seller分析指导品类筛选，测试多个轻量、低成本产品品类，通过1688建立供应商关系，并建立从市场选择、产品采购到上架、履约、客户反馈和优化的完整流程。",
            "表现最佳单品月销量超过100件。通过供应商开发和货代协调提升运营稳定性。",
          ],
        },
      },
      {
        title: { en: "Capabilities Proven", zh: "证明的能力" },
        body: {
          en: ["International Market Entry / Marketplace Research / Best Seller Analysis / Competitive Analysis / Product Opportunity Evaluation / Resource-Constrained Experimentation / Supplier Development / Cross-Border Operations / Logistics Coordination / Operational Adaptation"],
          zh: ["国际市场进入 / 平台研究 / Best Seller分析 / 竞争分析 / 产品机会评估 / 有限资源下的商业实验 / 供应商开发 / 跨境运营 / 物流协调 / 运营适应能力"],
        },
      },
      {
        title: { en: "What This Proves", zh: "这个案例证明了什么" },
        body: {
          en: [
            "This case demonstrates my ability to enter an unfamiliar market without relying on perfect information.",
            "I can use market data, marketplace signals, competitor research, and operational constraints to make practical business decisions. Rather than choosing products randomly, I built a structured selection process based on demand visibility, sourcing advantage, platform fit, and risk control.",
          ],
          zh: [
            "这个案例证明了我能够在信息不完全的情况下进入陌生市场。",
            "我能够结合市场数据、平台信号、竞品研究和运营约束做出实际商业决策。我们并不是随机选品，而是基于需求可见性、供应链优势、平台适配度和风险控制建立结构化选品流程。",
          ],
        },
      },
    ],
  },
  {
    id: "government-business",
    title: {
      en: "Turning Stakeholder Complexity into Project Execution",
      zh: "将复杂利益相关者关系转化为项目执行",
    },
    subtitle: {
      en: "Connecting government priorities, enterprise needs, local resources, and commercial opportunities through stakeholder coordination and project follow-up.",
      zh: "通过政企沟通、资源协调和持续跟进，连接政府目标、企业需求、地方资源和商业机会。",
    },
    image: "/images/cases/kaoba167.png",
    meta: [
      { label: { en: "Category", zh: "类别" }, value: { en: "Government-Business Collaboration", zh: "政企合作" } },
      { label: { en: "Market", zh: "市场" }, value: { en: "Guiyang, China", zh: "贵阳，中国" } },
      { label: { en: "Period", zh: "时间" }, value: { en: "2021.01 - 2021.12", zh: "2021.01 - 2021.12" } },
      {
        label: { en: "Focus", zh: "重点" },
        value: {
          en: "Stakeholder Management / Business Development / Project Coordination",
          zh: "利益相关者管理 / 商务拓展 / 项目协调",
        },
      },
    ],
    metrics: [
      { en: "100+ enterprise and government-related relationships", zh: "100+ 企业及政府相关机构关系" },
      { en: "RMB 200M+ commercial projects supported", zh: "参与推动超2亿元商业项目" },
      { en: "Approx. RMB 10M cultural tourism activities supported", zh: "支持约1000万元文旅商业活动" },
      { en: "Coordination related to RMB 1.43B urban renewal initiative", zh: "参与约14.3亿元城市更新项目相关协调" },
    ],
    sections: [
      {
        title: { en: "Overview", zh: "项目概览" },
        body: {
          en: [
            "This case focused on government-business collaboration and investment promotion. The work involved understanding enterprise needs, interpreting regional opportunities and policy resources, coordinating government departments and commercial stakeholders, and supporting project implementation.",
          ],
          zh: [
            "这个案例聚焦于政企合作与招商引资工作。核心工作包括理解企业需求、解读区域机会和政策资源、协调政府部门与商业利益相关方，并支持项目持续推进和落地。",
          ],
        },
      },
      {
        title: { en: "Business Challenge", zh: "商业挑战" },
        body: {
          en: [
            "Investment promotion and enterprise development involve a fundamental coordination problem. Governments want investment, employment, commercial activity, and long-term regional development. Enterprises want market opportunities, predictable business conditions, operational support, resources, and confidence that projects can be implemented.",
            "These interests can overlap, but alignment does not happen automatically. Enterprises need credible information and clear expectations, while government resources and policy support must be connected to real business needs over long project timelines.",
            "The challenge was to use the government platform not simply as an administrative channel, but as a mechanism for understanding enterprise needs, coordinating public resources, reducing uncertainty, and supporting implementation.",
          ],
          zh: [
            "招商引资和企业服务本质上是一个复杂协调问题。政府希望引入投资、增加就业、促进商业活力和长期区域发展；企业则关注市场机会、稳定的营商环境、运营支持、资源获取，以及项目能否真正落地。",
            "这些利益可能重合，但不会自动形成合作。企业在做投资决策之前，需要可信的信息和清晰预期；政府资源和政策支持也需要与真实企业需求连接起来，并在较长周期内持续协同。",
            "真正的挑战，是将政府平台不仅作为行政沟通渠道，而是作为理解企业需求、协调公共资源、降低不确定性并支持项目实施的机制。",
          ],
        },
      },
      {
        title: { en: "Insight", zh: "关键洞察" },
        body: {
          en: [
            "Enterprises rarely make investment decisions based on one meeting or one policy. They need to know whether the market opportunity is real, whether local demand can support the business, whether the policy environment is predictable, whether resources can be coordinated, and whether problems will be addressed during implementation.",
            "Effective investment promotion required connecting Regional Opportunity → Enterprise Need → Government Capability. My role was to identify where these three elements could align realistically.",
          ],
          zh: [
            "我逐渐意识到，企业很少会因为一次会议或一项政策就做出投资决策。企业需要判断市场机会是否真实、当地需求是否足以支撑业务、政策环境是否稳定、相关资源是否可以协调，以及项目推进过程中问题能否被持续解决。",
            "有效的招商引资并不是简单展示优惠政策，而是连接：区域机会 → 企业需求 → 政府能力。我的角色，是帮助识别这三者之间能够形成共识和合作的地方。",
          ],
        },
      },
      {
        title: { en: "Strategy / Approach", zh: "策略与方法" },
        body: {
          en: [
            "I developed a consistent approach: understand the regional opportunity, research target enterprises, identify enterprise needs, find areas of alignment, coordinate stakeholders, reduce execution friction, and maintain project momentum.",
            "The complete logic became: Regional & Industry Research → Enterprise Research → Needs Identification → Opportunity Matching → Resource Coordination → Problem Resolution → Project Advancement.",
          ],
          zh: [
            "我逐渐形成了一套企业服务和项目协调方法：理解区域机会、研究目标企业、识别企业需求、寻找匹配空间、协调利益相关方、降低执行摩擦，并保持项目推进。",
            "完整逻辑为：区域与行业研究 → 企业研究 → 需求识别 → 机会匹配 → 资源协调 → 问题解决 → 项目推进。",
          ],
        },
      },
      {
        title: { en: "What I Did", zh: "我具体做了什么" },
        body: {
          en: [
            "I independently developed and maintained relationships with more than 100 enterprises, government organizations, and strategic partners. I researched potential partners, initiated communication, understood enterprise needs, and maintained long-term relationships.",
            "I used government reports, industry information, policy documents, regional consumption data, and local commercial resources to support enterprise communication and opportunity analysis.",
            "I collected enterprise needs and coordinated communication with relevant government departments. When enterprises encountered problems or required support, I helped identify relevant departments and resources, facilitate communication, and follow up on progress.",
            "I organized and supported business forums, investment promotion conferences, and government-enterprise meetings. I also supported enterprises preparing for the Canton Fair, coordinated Snow Beer cultural tourism activities, participated in Xinyin 1950 commercial district communication, and supported coordination related to a RMB 1.43 billion urban renewal initiative.",
          ],
          zh: [
            "我独立开发并维护100+企业、政府相关机构和战略合作伙伴关系，研究潜在合作方，主动沟通，理解企业需求，并维护长期关系。",
            "我使用政府报告、行业信息、政策文件、区域消费数据和本地商业资源，支持企业沟通和机会分析。",
            "我收集企业需求，并协调企业与相关政府部门沟通。当企业遇到问题或需要支持时，我协助识别相关部门和资源，推动沟通并持续跟进进展。",
            "我组织并支持商务论坛、招商推介会和政企会议；协助本地企业筹备并参加广交会；协调雪花啤酒文旅活动；参与新印1950商业街项目企业沟通；也参与约14.3亿元城市更新项目相关协调和营商环境支持工作。",
          ],
        },
      },
      {
        title: { en: "Operating System", zh: "运营系统" },
        body: {
          en: [
            "Regional Research → Enterprise Research → Needs Collection → Opportunity Matching → Government-Enterprise Communication → Resource Coordination → Issue Follow-up → Project Advancement.",
            "Representative projects included Snow Beer Festival & Cultural Market initiatives, the Xinyin 1950 Commercial District Project, enterprise development support, and Canton Fair participation support.",
          ],
          zh: [
            "区域研究 → 企业研究 → 需求收集 → 机会匹配 → 政企沟通 → 资源协调 → 问题跟进 → 项目推进。",
            "代表性项目包括雪花啤酒节与文化市集、新印1950商业街项目、企业服务与广交会支持等。",
          ],
        },
      },
      {
        title: { en: "Results", zh: "结果" },
        body: {
          en: [
            "Developed and maintained relationships with more than 100 enterprises, government organizations, and strategic partners.",
            "Participated in commercial projects exceeding RMB 200 million, supported approximately RMB 10 million in cultural tourism and commercial activities, and participated in stakeholder coordination related to a RMB 1.43 billion urban renewal initiative.",
            "Supported enterprises participating in the Canton Fair and exploring international business opportunities.",
          ],
          zh: [
            "开发并维护100+企业、政府相关机构和战略合作伙伴关系。",
            "参与推动超2亿元商业项目，支持约1000万元文旅和商业活动，并参与约14.3亿元城市更新项目相关利益相关方协调。",
            "支持企业参加广交会并探索国际业务机会。",
          ],
        },
      },
      {
        title: { en: "Capabilities Proven", zh: "证明的能力" },
        body: {
          en: ["Stakeholder Management / Business Development / Enterprise Research / Market & Regional Analysis / Strategic Communication / Government-Enterprise Collaboration / Resource Coordination / Complex Project Execution / Problem Structuring / Long-Term Relationship Management"],
          zh: ["利益相关者管理 / 商务拓展 / 企业研究 / 市场与区域分析 / 战略沟通 / 政企协作 / 资源协调 / 复杂项目执行 / 问题结构化 / 长期关系维护"],
        },
      },
      {
        title: { en: "What This Proves", zh: "这个案例证明了什么" },
        body: {
          en: [
            "This case demonstrates my ability to operate in complex environments where business outcomes depend on multiple organizations.",
            "I can use market and organizational information to understand opportunities, identify stakeholder needs, connect relevant resources, reduce execution friction, and maintain project momentum.",
            "More importantly, I understand that business development is not simply about finding opportunities. It is about building enough trust, alignment, and execution capability to turn opportunities into real projects.",
          ],
          zh: [
            "这个案例证明了我能够在结果依赖多个组织的复杂环境中开展工作。",
            "我能够利用市场和组织信息理解机会，识别利益相关方需求，连接相关资源，降低执行摩擦，并保持项目推进。",
            "更重要的是，我理解商务拓展并不仅仅是寻找机会，而是建立足够的信任、共识和执行能力，把机会转化为真实项目。",
          ],
        },
      },
    ],
  },
] as const;
