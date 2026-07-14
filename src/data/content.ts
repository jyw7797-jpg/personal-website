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
      title: { en: "From Government Projects to a Personal Business Loop", zh: "从政府项目到个人商业闭环" },
      shift: {
        from: { en: "Government Projects", zh: "政府项目" },
        to: { en: "Personal Online Education Studio", zh: "个人线上教育工作室" },
      },
      summary: {
        en: "I moved from government-business coordination and enterprise services to building a personal online civil service exam education studio from scratch. Through Xiaohongshu content acquisition, WeChat private-domain engagement, trial-session conversion, and long-term service delivery, I converted 500+ paid users and built a complete loop from acquisition to conversion, delivery, and referral growth.",
        zh: "从政企协调和企业服务，转向从0搭建个人线上考公教育工作室。我通过小红书内容获客、微信私域承接和试听体验转化，完成500+付费用户转化，并建立获客、转化、交付和转介绍的完整业务闭环。",
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
            "就业环境和考公需求正在变化，考生对高质量备考信息和灵活服务的需求持续增长。同时，内容平台正在改变考生获取学习信息和选择教育服务的方式。",
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
    en: ["Competitive Analysis", "Customer Insight", "Market Segmentation", "Product Strategy", "Differentiated Pricing", "Content Marketing", "Cross-platform Operations", "Private-domain Growth", "Consultative Selling", "Service Commercialization", "Customer Conversion", "Product Iteration"],
    zh: ["竞品分析", "用户洞察", "市场细分", "产品策略", "差异化定价", "内容营销", "跨平台运营", "私域增长", "咨询式销售", "服务商业化", "用户转化", "产品迭代"],
  },
  businessValue: {
    en: "This case demonstrates my ability to identify market gaps from competitor analysis and customer feedback, translate segmented needs into differentiated products and pricing, and build a complete commercial loop through content marketing, private-domain conversion, service delivery and referral growth.",
    zh: "这一案例证明，我能够从竞品分析和用户反馈中识别市场空档，将细分用户需求转化为差异化产品与定价策略，并通过内容营销、私域转化、服务交付和转介绍建立完整商业闭环。",
  },
},
  "uae-market-entry": {
    title: { en: "Capabilities Proven & Business Value", zh: "证明的能力与商业价值" },
    capabilities: {
      en: ["Middle East Market Research", "Market Entry Strategy", "Cross-cultural Consumer Insight", "Amazon and Noon Platform Analysis", "Product and Category Strategy", "China-based Supply Chain Sourcing", "Supplier Development", "TikTok and Instagram Content Marketing", "Logistics and Fulfillment Optimization", "Low-inventory Market Validation", "Data-driven Product Iteration", "Go-to-market Execution"],
      zh: ["中东市场研究", "市场进入策略", "跨文化消费者洞察", "Amazon与Noon平台分析", "产品与品类策略", "中国供应链整合", "供应商开发", "TikTok与Instagram内容营销", "物流与履约优化", "低库存市场验证", "数据驱动产品迭代", "GTM执行"],
    },
    businessValue: {
      en: "This case demonstrates my ability to translate macro market signals into a practical market-entry strategy, then execute through platform research, culturally informed product selection, China-based supply chain sourcing, content testing, dropshipping validation, and phased fulfillment improvement.",
      zh: "这一案例证明，我能够将宏观市场信号转化为具体的市场进入策略，并通过平台研究、跨文化选品、中国供应链匹配、内容测试、一件代发验证和阶段性履约升级，完成从机会判断到商业执行的闭环。",
    },
  },  "government-business": {
    "title": {
      "en": "Capabilities Proven & Business Value",
      "zh": "证明的能力与商业价值"
    },
    "capabilities": {
      "en": [
        "Stakeholder Coordination",
        "Market Research",
        "Urban Renewal Positioning",
        "Brand Strategy",
        "Event Marketing",
        "Government-Business Communication",
        "Resource Integration",
        "Consumer Insight",
        "Project Advancement",
        "Regional Marketing"
      ],
      "zh": ["多方协调", "市场调研", "城市更新定位", "品牌策划", "活动营销", "政企沟通", "资源整合", "消费者洞察", "项目推进", "区域营销"]
    },
    "businessValue": {
      "en": "This case demonstrates my ability to connect market research, government-business coordination, brand activation, media communication, and commercial planning in an urban renewal context. I identified consumer-scene opportunities around an underused industrial site, coordinated stakeholders, proposed the Spring Festival Snow Beer Cultural Market as an early validation mechanism, and supported XinYin 1950's further project advancement without overstating individual ownership of the project investment scale.",
      "zh": "这个案例证明了我能够在城市更新场景中连接市场调研、政企协调、品牌合作、媒体传播和商业策划。我通过调研识别旧工业空间周边的年轻消费与本地文化机会，协调多方资源，提出以春节雪花啤酒文化集市作为前期消费场景验证，并支持新印1950项目进一步推进，同时不将项目投资规模夸大为个人创造或独立负责的成果。"
    }
  },
} as const;

export const caseDetails = [
  {
  id: "kaoba167",
  title: {
    en: "Kaoba 167: Differentiated Product and Pricing Strategy Based on Market Gaps",
    zh: "考吧167：基于市场空档的差异化产品与定价策略",
  },
  subtitle: {
    en: "How a niche online education project competed in a market dominated by large training institutions through customer segmentation, differentiated products, pricing strategy and cross-platform content marketing",
    zh: "如何在大型培训机构占据主要市场份额的情况下，通过细分用户需求、差异化产品设计与跨平台内容营销完成商业转化",
  },
  image: "/images/cases/government-business.png",
  meta: [
    { label: { en: "Project Type", zh: "项目类型" }, value: { en: "Online Education / Product Strategy / Differentiated Pricing / Content Growth / Private-Domain Operations", zh: "在线教育、产品策略、差异化定价、内容增长、私域运营" } },
    { label: { en: "My Role", zh: "我的角色" }, value: { en: "Project Owner / Product Design / Content Operations / User Conversion / Course Delivery", zh: "项目主理人、产品设计、内容运营、用户转化与课程交付" } },
    { label: { en: "Main Channels", zh: "主要渠道" }, value: { en: "Xiaohongshu / Douyin / Bilibili / Personal WeChat", zh: "小红书、抖音、B站、个人微信" } },
    { label: { en: "Core Results", zh: "核心成果" }, value: { en: "Around 2,000 leads, approximately 500 paying users, and about 70 referral users", zh: "累计引流约2,000名考公意向用户，转化约500名付费用户，其中约70名来自老用户转介绍" } },
  ],
  metrics: [
    { en: "Around 2,000 private-domain leads", zh: "约2,000名私域意向用户" },
    { en: "Approximately 500 paying users", zh: "约500名付费用户" },
    { en: "About 70 referral users", zh: "约70名老用户转介绍" },
  ],
  sections: [
    { title: { en: "Project Overview", zh: "项目概述" }, body: { en: ["Kaoba 167 was an online civil-service exam preparation project I built and operated from zero. The market was already dominated by major providers such as Offcn and Fenbi, which had strong brand awareness, mature course systems and established user bases.", "Instead of competing on course volume, brand scale or offline locations, I focused on whether there were underserved customer segments, pricing gaps and service needs that large standardized products did not fully cover.", "I analyzed recorded online courses, offline programs, user feedback and exam-preparation discussions across content platforms. I identified two gaps: price-sensitive users between RMB 780 standard recorded courses and low-cost unauthorized course copies, and working candidates who could not attend RMB 5,000 to RMB 20,000 offline programs but still needed short-cycle personalized support.", "Based on these gaps, I designed two core offers: a RMB 137 one-week recorded course with personalized assignment review and feedback, and an approximately RMB 3,500 ten-day online one-to-one intensive preparation program.", "Through a full chain of competitor analysis, market-gap identification, product design, differentiated pricing, cross-platform acquisition, private-domain diagnosis, product matching, service delivery and referral growth, the project attracted around 2,000 leads to personal WeChat and converted approximately 500 paying users, including about 70 referral users."], zh: ["考吧167是我从0到1运营的线上考公教育项目。项目所在市场已经由中公、粉笔等大型培训机构建立了较强的品牌认知、课程体系和用户基础。", "对个人项目而言，直接与大型机构竞争课程数量、品牌知名度、师资规模和线下网点并不现实。因此，项目早期的核心问题并不是如何提供更多课程，而是市场中是否仍然存在未被充分满足的细分用户、价格空档和服务需求。", "我首先分析了大型机构的主流录播课程、线下培训产品、用户反馈和不同平台上的备考讨论，并发现两个明显空档：一是约780元标准录播课与几元至十几元非正版课程资源之间的中间市场，二是在职或时间受限考生对短期、高密度、一对一服务的需求。", "基于这两个市场空档，我设计了两类核心产品：约137元的一周录播课程加个人批改服务，以及约3,500元的十天线上一对一冲刺课程。", "通过“竞品分析—市场空档识别—产品设计—差异化定价—跨平台获客—私域需求诊断—产品匹配—服务转介绍”的完整链路，项目累计引流约2,000名意向用户至个人微信，累计转化约500名付费用户，其中约70名来自老用户转介绍。"] } },
    { title: { en: "Market Background", zh: "市场背景" }, body: { en: ["Major providers such as Offcn and Fenbi had strong course systems, brand awareness, teaching resources and offline networks. A personal project could not compete head-on through advertising budgets, course quantity or offline scale.", "Mainstream recorded online courses were priced around RMB 780. They were comprehensive, but some users felt the price was high, only needed selected content, lacked personalized feedback after purchase, or struggled to complete large course packages.", "Some price-sensitive users turned to unauthorized course copies priced from a few RMB to a dozen RMB, but those resources could not provide real service, personalized assignment review or reliable learning support.", "Offline programs were often priced between RMB 5,000 and RMB 20,000. They provided concentrated learning environments, but working candidates and time-constrained users often could not attend long offline courses and still needed flexible personalized help."], zh: ["中公、粉笔等大型机构具备完善课程体系、较高品牌知名度、成熟师资资源和线下教学网络。个人项目无法通过课程数量、广告预算、品牌规模或线下网点与其正面竞争。", "大型机构的主流录播产品价格约为780元。通过社交平台讨论、用户评论和备考群体反馈，我发现部分用户认为完整课程价格较高，实际只需要部分重点内容，购买后缺少个性化反馈，或者课程数量较多但完成压力较大。", "部分价格敏感用户会转向第三方平台几元至十几元的非正版课程资源，但这类资源无法提供真实服务、个人批改和可靠学习支持。", "大型机构的线下课程价格通常在5,000元至20,000元不等。线下课程能够提供集中学习环境，但在职或时间受限考生往往无法长期到校，却仍然需要灵活、个性化和短周期的服务。"] } },
    { title: { en: "Core Challenges", zh: "核心挑战" }, body: { en: ["How to acquire users when large institutions already owned the main brand awareness.", "How to avoid direct competition on course quantity and standardized products.", "How to create a new value zone between RMB 780 recorded courses and low-cost unauthorized course copies.", "How to design an alternative to high-priced offline courses for working candidates who could not attend school for long periods.", "How to convert content traffic into paying users rather than only views and interactions.", "How to build trust through service and generate referral growth."], zh: ["如何在大型机构已经建立品牌优势的情况下获取目标用户。", "如何避免与大型机构直接竞争课程数量和标准化产品。", "如何在约780元录播课和低价非正版资源之间建立新的价值区间。", "如何为无法长期到校的在职考生设计替代高价线下课程的产品。", "如何将内容流量转化为真实付费用户，而不是只获得播放量和互动。", "如何通过服务建立口碑，推动复购和老用户转介绍。"] } },
    { title: { en: "My Role & Responsibilities", zh: "我的角色与职责" }, body: { en: ["I analyzed Offcn, Fenbi and other major providers in terms of course formats, pricing ranges and product structures.", "I researched user discussions around recorded courses, offline courses and unauthorized course copies, then identified the pricing and service gaps between them.", "I designed the RMB 137 one-week recorded course with personalized assignment review and the approximately RMB 3,500 ten-day online one-to-one intensive program.", "I analyzed civil-service exam preparation content on Bilibili, Xiaohongshu and Douyin, designed platform-specific topics and acquisition paths, and guided public-platform users into personal WeChat.", "I diagnosed users' background, time constraints, budget and service needs through one-to-one conversations, matched them with suitable products, and personally participated in teaching, assignment review, Q&A and feedback.", "I continuously optimized products and content based on user consultation, delivery feedback and referral behavior."], zh: ["分析中公、粉笔等大型机构的课程形式、价格区间和产品结构。", "调研用户对录播课、线下课和非正版课程资源的讨论与反馈，识别标准录播产品与低价资源之间的市场空档，以及在职、时间受限和短期冲刺考生的服务需求。", "设计约137元的一周录播加个人批改产品，以及约3,500元的十天线上一对一冲刺产品。", "分析B站、小红书和抖音不同平台上的考公内容和用户行为，设计跨平台内容选题、标题和引流方式，并将公域用户引导至个人微信。", "通过一对一沟通判断用户基础、时间、预算和服务需求，匹配不同产品，并亲自参与课程讲解、作业批改、答疑和学习反馈。", "根据用户咨询和交付反馈持续优化产品及内容，并通过持续服务推动老用户转介绍。"] } },
    { title: { en: "Competitive Analysis & Market Gap Identification", zh: "竞品分析与市场空档识别" }, body: { en: ["For mainstream RMB 780 recorded online courses, I found clear advantages in system completeness, brand recognition and content coverage, but user feedback revealed concerns around price, course overload, lack of personalized review and limited adaptation to individual foundations.", "For offline programs priced around RMB 5,000 to RMB 20,000, I found advantages in learning atmosphere and face-to-face interaction, but working candidates could not always take leave, attend long programs or pay for a full offline package when they only needed targeted support.", "This led to two gaps: a lower-threshold product with real personal service between standard recorded courses and unauthorized copies, and a short-cycle high-service online product between standardized online courses and expensive offline programs."], zh: ["我对大型机构约780元的线上录播课程进行分析。这类产品课程体系完整、品牌认知度高、内容覆盖范围广，但用户反馈也暴露出价格较高、内容过多、缺少针对个人答案的具体批改、难以根据个人基础调整重点等问题。", "我也分析了大型机构价格约为5,000元至20,000元的线下课程。线下课程具备集中学习环境和面对面互动，但在职考生无法长期请假，时间安排不固定，临近考试时也未必需要完整长期班课。", "因此，我识别出两个市场空档：一是标准录播课与低价非正版资源之间，缺少价格较低、周期较短且具备真实个人服务的产品；二是标准化线上课程与高价线下课程之间，缺少面向在职和时间受限用户的短周期、高密度线上一对一产品。"] } },
    { title: { en: "Product Strategy 01: RMB 137 Recorded Course + Feedback", zh: "产品策略一：137元一周录播加个人批改" }, body: { en: ["This product targeted users who were price-sensitive toward RMB 780 full courses, did not need a long comprehensive package, wanted to build a short-term learning framework, or needed real feedback rather than unauthorized course copies.", "The offer included focused recorded lessons, a one-week learning scope, personalized assignment review and feedback from the project owner, concrete answers to user questions and guidance on next learning steps.", "The differentiation was not simply low pricing. Compared with RMB 780 standard recorded courses, it was shorter, more focused, easier to complete and included personal feedback. Compared with unauthorized course copies, it provided structured formal service and real interaction.", "In communication, I described the review service accurately: assignments were personally reviewed by the project owner with government work experience. This did not imply official exam authority or insider status."], zh: ["该产品主要面向对约780元完整课程价格敏感、不需要长期完整课程、希望短期建立学习框架、已经拥有资料但缺少个人反馈，或不愿购买非正版资源而希望获得真实服务的用户。", "产品设置为约137元，服务周期为一周，主要包括聚焦重点内容的录播课程、一周内可以完成的学习范围、由项目主理人提供个人作业或答案批改、针对用户问题提供具体反馈，并帮助用户判断后续学习方向。", "这一产品并不是单纯通过低价竞争。与约780元标准录播课相比，它周期更短、内容更聚焦、决策门槛更低、用户更容易完成，并增加个人批改和具体反馈。与几元至十几元的非正版课程资源相比，它提供结构化的正式服务、真实的个人反馈和明确交付范围。", "在信任表达上，我准确强调课程由具有政府工作经历的项目主理人亲自参与批改和反馈，不表达为官方阅卷、内部命题、考试权威或任何未经证实的官方身份。"] } },
    { title: { en: "Product Strategy 02: RMB 3,500 Ten-Day One-to-One Program", zh: "产品策略二：约3,500元十天线上一对一冲刺" }, body: { en: ["This product targeted working candidates, users who could not attend offline courses for long periods, candidates close to the exam, and users who wanted personalized plans, high-frequency feedback and training around weak areas.", "The program included ten days of concentrated online learning, an individualized intensive plan, one-to-one explanation and Q&A, focused training for weak areas, frequent assignment review and dynamic adjustment based on progress.", "It was not a cheap version of an offline class. It was redesigned around the time constraints of working users: no long commute, shorter cycle, flexible schedule, personalized content and high-frequency interaction.", "The pricing reflected service time, one-to-one delivery effort, personalized planning, frequent review, dynamic adjustment and the user's need for time flexibility."], zh: ["该产品主要面向已经参加工作的考生、无法长期参加线下课程的用户、临近考试需要集中强化的用户，以及希望获得个性化计划和高频反馈的用户。", "产品价格约为3,500元，服务周期为十天，主要包括十天集中式线上学习、根据用户基础制定个性化冲刺计划、一对一讲解和答疑、针对薄弱环节安排重点训练、高频作业批改和反馈，并根据学习进度动态调整安排。", "该产品不是简单把线下课程搬到线上，而是围绕在职和时间受限用户重新设计。与5,000元至20,000元线下课程相比，它不要求长期到校，时间更集中，服务周期更短，学习安排更灵活，内容围绕个人问题展开，并保留高频互动和一对一反馈。", "约3,500元的价格主要基于十天内投入的服务时间、一对一课程所需精力、个性化学习计划设计、高频批改与反馈、动态调整和相较于高价线下班的成本优势。"] } },
    { title: { en: "Differentiated Product Matrix", zh: "差异化产品矩阵" }, body: { en: ["The low-threshold product was the RMB 137 one-week recorded course with personalized feedback. It reduced first-purchase risk, served users sensitive to RMB 780 full courses, focused on key content and provided real review service.", "The high-service product was the approximately RMB 3,500 ten-day online one-to-one intensive program. It served working candidates who could not attend offline classes, needed concentrated improvement and valued personalized planning, Q&A and feedback.", "The two products did not represent simple low-end and high-end versions. They addressed different customer situations and different unmet needs."], zh: ["低门槛产品是约137元的一周录播加个人批改服务，主要解决用户首次购买风险高、对780元完整课程价格敏感、只需要重点内容、希望获得真实批改和先体验服务的问题。", "高服务产品是约3,500元的十天线上一对一冲刺课程，主要解决在职考生无法长期到校、临近考试需要集中提升、需要个性化计划、高频答疑和反馈，并愿意为时间效率和服务深度付费的问题。", "两个产品分别对应不同用户场景，而不是简单的高价版与低价版。一个解决标准录播课价格较高而低价非正版资源缺少真实服务的问题，另一个解决线下课程价格高、周期长且无法适应在职用户时间安排的问题。"] } },
    { title: { en: "Cross-Platform Content Marketing Strategy", zh: "跨平台内容营销策略" }, body: { en: ["After product design, I needed to acquire users in a market where large institutions already held most brand and search awareness. I analyzed civil-service exam accounts, content formats, titles and user interactions on Bilibili, Xiaohongshu and Douyin, then designed platform-specific content roles.", "Bilibili was used for long-form experience sharing and systematic methods; Xiaohongshu was used for searchable hot-topic graphics and precise lead acquisition; Douyin was used for short videos with strong pain points to expand reach and test user attention.", "Expressions such as zero foundation or short-time preparation were treated as content hooks that presented strong pain points and user scenarios, not as guaranteed outcomes for all users."], zh: ["产品设计完成后，需要解决如何从大型机构已经占据大量品牌认知和搜索流量的市场中获得用户。我分析了B站、小红书和抖音上的考公账号、内容形式、标题方式和用户互动特征，并根据平台差异设计不同内容分工。", "B站负责深度内容、专业信任和长期认知；小红书负责热点图文、搜索获客、精准引流和私域承接；抖音负责短视频曝光、强痛点触达和快速测试内容方向。", "“零基础、半个月上岸”等表达只作为强痛点内容标题或内容营销示例，用于快速吸引用户注意和呈现结果场景，不代表对所有用户作出确定结果承诺。"] } },
    { title: { en: "Private-Domain Conversion Strategy", zh: "私域转化策略" }, body: { en: ["After users entered personal WeChat, I did not send a uniform course package or price list. I first understood whether they were working candidates, their preparation stage, existing materials, time constraints, budget expectations and need for review, one-to-one help, supervision or intensive training.", "For price-sensitive users who needed a short trial, I matched the RMB 137 recorded course with personalized review. For users with stronger needs and time constraints, I matched the RMB 3,500 ten-day one-to-one program.", "For hesitant users, I reduced decision risk through trial experiences, continued content touchpoints and one-to-one Q&A rather than unlimited discounting."], zh: ["用户进入个人微信后，我不会直接发送统一课程和统一报价，而是先了解用户是否为在职考生、当前备考阶段、是否已经购买其他课程、当前使用哪些学习资料、是否能够参加线下学习、最需要解决的问题、可以接受的学习周期、对价格和服务的预期，以及是否需要批改、一对一、监督或短期冲刺。", "对于价格敏感、需要短期体验的用户，优先匹配约137元的一周录播加个人批改服务；对于时间受限、需求更高的用户，优先匹配约3,500元的十天线上一对一冲刺课程。", "对于暂时犹豫的用户，通过试听、体验、内容持续触达和一对一答疑降低决策风险，而不是持续无原则降价。"] } },
    { title: { en: "Project Results", zh: "项目成果" }, body: { en: ["Built a cross-platform acquisition system across Xiaohongshu, Douyin and Bilibili, attracting around 2,000 civil-service exam preparation leads into personal WeChat.", "Converted approximately 500 paying users through needs diagnosis, product matching, differentiated pricing, trial experiences and follow-up.", "Generated about 70 referral users through course service, personalized assignment review, Q&A and continued customer relationship maintenance.", "Established two differentiated products: the RMB 137 one-week recorded course with personalized feedback and the approximately RMB 3,500 ten-day online one-to-one intensive program.", "Built a complete flow from competitor analysis, product design, pricing and content acquisition to private-domain conversion, consultative selling, course delivery and referral growth."], zh: ["通过小红书、抖音和B站进行差异化内容运营，累计吸引约2,000名考公意向用户进入个人微信。", "通过需求诊断、产品匹配、差异化定价、体验和持续跟进，累计转化约500名付费用户。", "通过课程服务、个人批改、答疑和持续用户关系维护，约70名付费用户来自已有用户推荐。", "建立两类差异化产品：约137元的一周录播加个人批改服务，以及约3,500元的十天线上一对一冲刺课程。", "完成竞品分析、产品设计、定价、内容获客、私域承接、咨询式销售、课程交付和转介绍的完整链路。"] } },
    { title: { en: "Core Business Logic", zh: "核心商业逻辑" }, body: { en: ["Do not compete on course quantity; compete on need matching. Major institutions had many standardized courses, while I reduced unnecessary learning and purchase costs through more focused products.", "Do not rely only on low pricing; add personal service. The RMB 137 product created differentiation through project-owner review and feedback.", "Do not copy offline courses; redesign service delivery. The RMB 3,500 one-to-one product was built around working users' time limitations and short-cycle needs.", "Do not depend on one platform; let Bilibili, Xiaohongshu and Douyin play different roles in trust building, precise acquisition and broad reach.", "Do not hard sell first; diagnose needs before matching products."], zh: ["不竞争课程数量，竞争需求匹配。大型机构拥有大量标准课程，我通过更聚焦的产品减少用户不必要的学习和购买成本。", "不单纯依靠低价，而是增加个人服务。137元产品虽然价格较低，但通过主理人个人批改和反馈，与非正版资源及普通录播课形成差异。", "不复制线下课程，而是重新设计服务形式。约3,500元的一对一产品围绕在职用户的时间限制和短期冲刺需求进行设计。", "不依赖单一内容平台，而是根据B站、小红书和抖音的用户行为，分别承担专业信任、精准引流和大范围触达。", "不直接推销，先完成需求诊断。用户进入私域后，根据基础、时间、预算和服务需求匹配产品，而不是发送统一报价。"] } },
    { title: { en: "Project Methodology", zh: "项目方法论" }, body: { en: ["Step 1: Analyze competitor products, prices, delivery models and user feedback.", "Step 2: Identify gaps between standard recorded courses, unauthorized low-cost resources and high-priced offline programs.", "Step 3: Segment users by price sensitivity, working status, short-term preparation needs and service depth.", "Step 4: Design differentiated products and pricing based on user scenarios, content scope, service time and delivery cost.", "Step 5: Build platform-specific content and guide public traffic into private-domain channels.", "Step 6: Diagnose needs, match products and use service quality to generate referral growth."], zh: ["第一步：竞品分析。分析大型机构产品价格、课程形式、交付方式和用户反馈。", "第二步：识别市场空档。找到标准录播课、低价非正版资源和高价线下课程之间未被满足的用户需求。", "第三步：进行用户分层。区分价格敏感用户、在职用户、短期冲刺用户和高服务需求用户。", "第四步：设计差异化产品和定价，让价格与内容范围、服务时间、个性化程度和交付成本相匹配。", "第五步：设计平台差异化内容，将公域流量导入私域。", "第六步：完成需求诊断和产品匹配，并通过批改、答疑、学习计划和持续反馈推动满意度和老用户转介绍。"] } },
    { title: { en: "Reflection", zh: "项目反思" }, body: { en: ["This project taught me that a personal project does not need to replicate all capabilities of major institutions or compete through lower prices across the entire market.", "A more effective approach is to analyze where standardized products fail to fully satisfy users, then redesign products around those unmet needs.", "The RMB 137 product was not simply a cheaper course. It controlled content scope and service cycle while adding personal feedback that large recorded courses could not easily provide.", "The RMB 3,500 ten-day one-to-one program was not a cheap substitute for offline classes. It was a high-service product redesigned for working and time-constrained users.", "This experience shaped my understanding of marketing and product commercialization: marketing is not only about traffic. It means identifying opportunities from competitors, pricing, user behavior and use scenarios, turning market insight into product design, and completing commercial conversion through the right content and sales path."], zh: ["这个项目让我认识到，个人项目不需要复制大型机构的全部能力，也不需要通过更低价格参与全面竞争。", "更有效的方式是分析大型机构标准化产品无法充分满足的用户需求，并围绕这些需求重新设计产品。", "137元的一周录播加个人批改产品，并不是简单降低课程价格，而是在控制内容范围和服务周期的同时，加入大型录播产品难以提供的个人反馈。", "约3,500元的十天线上一对一冲刺课程，也不是线下课程的廉价替代品，而是针对在职和时间受限用户重新设计的高密度服务。", "这段经历让我形成了对Marketing和产品商业化的理解：Marketing不仅是获得流量，更需要从竞品、价格、用户行为和使用场景中识别机会，将市场洞察转化为产品设计，再通过合适的内容和销售链路完成商业转化。"] } },
    { title: { en: "Core Capabilities", zh: "核心能力" }, body: { en: ["Competitive Analysis / Customer Insight / Market Segmentation / Product Strategy / Differentiated Pricing / Content Marketing / Cross-platform Operations / Private-domain Growth / Consultative Selling / Service Commercialization / Customer Conversion / Product Iteration"], zh: ["竞品分析 / 用户洞察 / 市场细分 / 产品策略 / 差异化定价 / 内容营销 / 跨平台运营 / 私域增长 / 咨询式销售 / 服务商业化 / 用户转化 / 产品迭代"] } },
    { title: { en: "Project Summary", zh: "项目总结" }, body: { en: ["Kaoba 167 was an online education project that built differentiated products from customer segmentation and market gaps in a market dominated by large training institutions.", "After analyzing RMB 780 standard recorded courses, low-cost unauthorized course copies and RMB 5,000 to RMB 20,000 offline programs, I identified two underserved needs: users who wanted focused content and real feedback at a lower threshold, and users who could not attend offline programs but were willing to pay for short-cycle high-density one-to-one service.", "I designed a RMB 137 one-week recorded course with personalized feedback and an approximately RMB 3,500 ten-day online one-to-one intensive program, then used platform-specific content on Bilibili, Xiaohongshu and Douyin to guide users into personal WeChat for needs diagnosis and product matching.", "The project attracted around 2,000 leads, converted approximately 500 paying users and generated about 70 referral users. It proves my ability to identify market opportunities from competitor analysis and user feedback, translate demand differences into product and pricing strategies, and close the commercial loop through content marketing, private-domain operations and consultative selling."], zh: ["考吧167是在大型培训机构占据主要市场认知的情况下，通过细分用户需求和市场空档建立差异化产品的在线教育项目。", "我首先分析了约780元的标准录播课程、几元至十几元的非正版资源，以及5,000元至20,000元的线下课程，并发现两类未被充分满足的需求：一类用户希望以更低门槛获得聚焦课程和真实个人反馈，另一类用户因为工作和时间限制无法长期到校，但愿意为短期、高密度和一对一服务付费。", "因此，我设计了约137元的一周录播加个人批改产品，以及约3,500元的十天线上一对一冲刺课程，并根据B站、小红书和抖音不同的平台特点，将用户导入个人微信，再通过需求诊断和产品匹配完成转化。", "项目累计引流约2,000名意向用户，转化约500名付费用户，其中约70名来自老用户转介绍。这一案例证明，我能够从竞品分析和用户反馈中识别市场机会，将用户需求差异转化为产品和定价策略，并通过内容营销、私域运营和咨询式销售完成商业闭环。"] } },
  ],
},
  {
    id: "uae-market-entry",
    title: { en: "Middle East Cross-Border E-commerce GTM Strategy & Execution", zh: "中东跨境电商GTM策略与落地" },
    subtitle: {
      en: "Developed and executed a go-to-market strategy based on 2022 Middle East e-commerce growth, UAE consumer insight and China-based supply chain capabilities—from market research and platform selection to product validation and localized fulfillment.",
      zh: "基于2022年中东市场增长、阿联酋消费者洞察与中国供应链能力，制定并执行从市场研究、平台选择、产品验证到本地履约升级的GTM策略。",
    },
    image: "/images/cases/uae-market-entry.png",
    meta: [
      { label: { en: "Research Started", zh: "项目研究启动" }, value: { en: "November 2022", zh: "2022年11月" } },
      { label: { en: "Execution Period", zh: "项目执行周期" }, value: { en: "January 2023 - September 2023", zh: "2023年1月—2023年9月" } },
      { label: { en: "Target Market", zh: "目标市场" }, value: { en: "Middle East, with the UAE as the main entry point", zh: "中东市场，以阿联酋为主要切入点" } },
      { label: { en: "Platforms", zh: "主要平台" }, value: { en: "Amazon UAE / Noon / TikTok / Instagram", zh: "Amazon UAE / Noon / TikTok / Instagram" } },
      { label: { en: "Supply Chain", zh: "供应链渠道" }, value: { en: "China-based suppliers / 1688", zh: "中国供应商 / 1688" } },
      { label: { en: "Role", zh: "我的角色" }, value: { en: "Co-founder; market research, product strategy, supplier development, platform operations, content marketing and fulfillment coordination", zh: "联合创始人，负责市场研究、选品策略、供应商开发、平台运营、内容营销与履约协调" } },
    ],
    metrics: [
      { en: "Middle East market research started in November 2022", zh: "2022年11月启动中东市场研究" },
      { en: "UAE selected as the main entry point", zh: "以阿联酋作为主要市场切入点" },
      { en: "Dropshipping and small-batch sourcing used for early validation", zh: "通过一件代发与小批量采购完成早期验证" },
      { en: "Localized inventory and fulfillment capabilities gradually developed", zh: "逐步建立本地备货与物流履约能力" },
      { en: "International channel performance grew by over 30% within six months", zh: "六个月内国际渠道增长30%以上" },
      { en: "Selected products exceeded 100 units in monthly sales", zh: "部分热销单品月销量超过100件" },
    ],
    sections: [
      { title: { en: "Project Overview", zh: "项目概述" }, body: { en: ["In 2022, I began researching the Middle East e-commerce market and selected the UAE as the main entry point.", "The judgment came from three signals: digital consumption and online shopping foundations in the region were continuing to develop; the UAE had relatively mature internet, platform and logistics infrastructure; and China-based supply chain capabilities could support broad product choice, flexible sourcing and low-threshold small-batch testing.", "According to data cited by the [U.S. International Trade Administration](https://www.trade.gov/country-commercial-guides/united-arab-emirates-ecommerce), UAE e-commerce sales grew by 53% in 2020 to USD 3.9 billion, representing approximately 10% of retail sales.", "A [World Bank 2022 study](https://www.worldbank.org/en/news/press-release/2022/03/16/digital-economy-could-reap-huge-benefits-for-middle-east-and-north-africa) stated that around 66% of the Middle East and North Africa population was using the internet.", "The project did not begin with large inventory or an independent website. The entry path was market and consumer research → Amazon and Noon platform analysis → category screening → China supplier matching → dropshipping validation → TikTok and Instagram content testing → order and feedback analysis → localized inventory and fulfillment upgrade.", "The core question was how to use China-based supply chain capabilities to validate products with lower inventory risk in a Middle East market with different cultural, payment and logistics conditions."], zh: ["2022年，我开始研究中东电商市场，并将阿联酋作为主要市场切入点。", "项目的市场判断主要来自三个方面：区域数字消费与线上购物基础持续发展；阿联酋具备相对成熟的互联网、平台和物流基础设施；中国供应链能够提供丰富产品、灵活采购和较低的小批量测试门槛。", "根据[美国国际贸易管理局](https://www.trade.gov/country-commercial-guides/united-arab-emirates-ecommerce)援引的数据，阿联酋电商销售额在2020年增长53%，达到39亿美元，约占当年零售销售额的10%。", "[世界银行2022年研究](https://www.worldbank.org/en/news/press-release/2022/03/16/digital-economy-could-reap-huge-benefits-for-middle-east-and-north-africa)指出，中东和北非地区约66%的人口已经使用互联网。", "基于这些市场信号，我没有在项目初期进行大量备货或建设独立站，而是采用低风险的市场进入方式：市场与消费者研究 → Amazon和Noon平台分析 → 产品品类筛选 → 中国供应商匹配 → 一件代发验证 → TikTok和Instagram内容测试 → 平台订单与用户反馈分析 → 本地备货及物流升级。", "项目希望回答的核心问题是：如何利用中国供应链优势，在文化、支付和物流环境不同的中东市场中，以较低库存风险完成产品验证，并逐步建立更稳定的市场进入与履约模式。"] } },      { title: { en: "2022 Middle East Market Opportunity Analysis", zh: "2022年中东市场机会分析" }, body: { en: ["In 2022, Middle East e-commerce market planning was shaped by ongoing development in digital consumption, regional marketplace infrastructure, social-media-driven product discovery, and improving warehousing, delivery and digital-payment conditions.", "I chose the UAE first because it offered a more suitable early test environment than entering multiple Middle East markets at the same time: platform infrastructure was already available through Amazon UAE and Noon, logistics conditions were more mature, and the market was manageable enough for early product validation.", "Digital payments were growing, but during 2022 planning, cash on delivery still had to be considered in some consumer groups and new-brand transaction contexts.", "An [ADGM digital payments study](https://assets.adgm.com/download/assets/Digital_Payments_in_the_UAE_Full_Paper.pdf/38e9483c5dfb11efbc625291b93fad95) cited 2018 Middle East and North Africa online shopping payment data showing credit cards at about 37%, cash on delivery at about 34% and bank transfers at about 12%; this data predates 2022 and is used only as historical payment-behavior background.", "Therefore, the project needed to evaluate not only product demand, but also willingness to prepay, cash-on-delivery refusal risk, delivery-cycle tolerance, single-unit logistics cost, breakage risk, and whether localized inventory could improve fulfillment experience."], zh: ["2022年，中东电商市场规划受到数字消费基础持续发展、区域电商平台基础设施完善、社交媒体推动产品发现，以及仓储、配送和数字支付条件改善等因素影响。", "相比同时进入多个中东市场，我选择先以阿联酋作为主要测试市场，因为Amazon UAE和Noon等平台基础已经存在，物流条件相对成熟，市场规模也更适合早期产品验证。", "数字支付正在增长，但2022年进行项目规划时，货到付款在部分消费者和新品牌交易场景中仍是需要考虑的支付方式。", "[ADGM数字支付研究](https://assets.adgm.com/download/assets/Digital_Payments_in_the_UAE_Full_Paper.pdf/38e9483c5dfb11efbc625291b93fad95)引用的2018年中东和北非地区线上购物支付数据中，信用卡约占37%，货到付款约占34%，银行转账约占12%；该数据早于2022年，仅用于说明区域历史支付习惯。", "因此，项目不仅需要判断产品需求，还需要考虑消费者是否愿意提前付款、货到付款是否会增加拒收风险、配送周期是否影响下单意愿、单件物流成本能否承受退换货、产品是否容易在运输中破损，以及本地库存是否能够改善履约体验。"] } },      { title: { en: "China-based Supply Chain Advantage", zh: "中国供应链的进入优势" }, body: { en: ["China-based supply chain capabilities were valuable not simply because of lower purchasing prices, but because they supported fast testing and continuous adjustment.", "Through 1688 and supplier networks, I could compare similar products, materials, colors, specifications, packaging size, weight, supplier responsiveness, dropshipping feasibility and replenishment stability.", "This changed the process from buying large inventory before proving demand to identifying demand first, matching products in small batches, validating through platforms and content, and then deciding whether to increase inventory."], zh: ["中国供应链对项目的价值不只是采购价格较低，而是能够支持快速测试和持续调整。", "通过1688及供应商网络，我能够比较同类产品的采购价格、材质、颜色、规格、包装尺寸、产品重量、供应商响应速度、一件代发可行性和补货稳定性。", "这使项目可以从先大量采购再验证需求，调整为先发现需求、小批量匹配产品、通过平台和内容验证，再决定是否增加库存，从而降低早期库存积压和选品错误的风险。"] } },
      { title: { en: "Core Challenges", zh: "核心挑战" }, body: { en: ["1. How to judge whether Middle East e-commerce growth could become concrete product opportunities.", "2. How to choose suitable early-stage platforms and product categories.", "3. How to screen products around cultural and religious differences.", "4. How to manage COD, refused delivery and cross-border shipping risk.", "5. How to use China-based supply chains for low-cost demand testing.", "6. How to move from dropshipping toward more stable localized fulfillment.", "7. How to translate TikTok and Instagram interest into real purchases on Amazon and Noon."], zh: ["1. 如何判断中东电商增长能否转化为具体产品机会。", "2. 如何选择适合早期进入的销售平台和产品品类。", "3. 如何根据文化与宗教差异进行产品筛选。", "4. 如何应对货到付款、拒收和跨境配送风险。", "5. 如何利用中国供应链完成低成本需求测试。", "6. 如何从一件代发逐步升级为更稳定的本地物流体系。", "7. 如何将社交媒体兴趣转化为Amazon和Noon上的真实购买。"] } },
      { title: { en: "Platform Selection Strategy", zh: "平台选择策略" }, body: { en: ["Amazon UAE was used as a demand-analysis and standardized transaction platform because customers have clear shopping intent, search results reveal competition, Best Seller products and user reviews expose demand patterns, and platform fulfillment options can support later execution upgrades.", "[Amazon UAE FBA](https://sell.amazon.ae/fulfillment-by-amazon) supports fulfillment services including storage, picking, packing, delivery, customer service and returns. This is a platform capability description, not a claim that the project used every FBA service in full.", "Noon was used to understand local Middle East consumers, regional best sellers, price ranges, product title and display patterns, and competition in beauty, accessories and household categories.", "I did not start with an independent website because an early-stage brand lacked natural traffic and trust, and would need to solve payment, advertising, delivery, returns and customer service independently before product validation."], zh: ["Amazon UAE主要作为需求分析和标准化成交平台，因为用户具有明确购物意图，搜索结果能够反映竞争，Best Seller和用户评价可以暴露需求模式，平台履约选项也能支持后续执行升级。", "[Amazon UAE FBA](https://sell.amazon.ae/fulfillment-by-amazon)支持储存、拣货、包装、配送、客户服务和退货等履约服务。这里属于平台能力说明，不表示项目实际完整使用了所有FBA服务。", "Noon用于理解中东本地消费者、区域热销商品、价格区间、商品标题与展示方式，以及美妆、饰品和家居产品的本地竞争。", "项目没有一开始以独立站为主，因为早期品牌缺少自然流量和信任，还需要独立解决支付、广告获客、配送、退货和客服问题，在选品尚未验证时难以判断投入回报。"] } },      { title: { en: "Consumer, Cultural and Religious Factors", zh: "消费者、文化与宗教因素分析" }, body: { en: ["The Middle East is not one uniform consumer market. The UAE includes local residents, consumers from other Arab countries, and large expatriate communities from South Asia, Europe and other regions.", "Product research considered whether patterns and words could be religiously sensitive, whether presentation fit local aesthetics, whether items suited daily use or gifting scenes, and whether colors, symbols or packaging could create misunderstanding.", "Products using relevant visual elements are described as lightweight accessories with Middle Eastern cultural and aesthetic relevance, not as religious jewelry."], zh: ["中东并不是完全统一的消费市场。阿联酋拥有本地居民、来自其他阿拉伯国家的消费者，以及大量来自南亚、欧洲和其他地区的外籍人口。", "产品研究重点关注图案和文字是否存在宗教敏感性、产品展示是否符合当地审美、是否适合当地日常生活与礼赠场景，以及颜色、图案和包装是否容易产生文化误读。", "涉及相关元素的产品，统一表述为具有中东文化与审美元素的轻量饰品，而不是笼统写成宗教饰品。"] } },
      { title: { en: "Product Selection Criteria", zh: "品类筛选标准" }, body: { en: ["Because the project initially used dropshipping and cross-border delivery, products needed favorable logistics attributes: small size, light weight, low breakage risk, no complex installation, low after-sales complexity, no strict shelf-life dependency, and controllable single-unit sourcing and delivery cost.", "Market criteria included existing demand on Amazon or Noon, clear use cases, easy-to-understand functions, suitability for images or short videos, limited dependence on famous brands, and room for bundles or differentiated packaging.", "Supply-chain criteria included multiple suppliers on 1688, small-batch or dropshipping support, reasonable purchasing space, stable replenishment, comparable specifications and materials, and future scaling potential."], zh: ["由于项目初期采用一件代发和跨境配送，产品需要具备较好的物流属性：体积较小、重量较轻、不容易破损、不涉及复杂安装、不属于高售后产品、不依赖严格保质期，且单件采购与物流成本可控。", "市场属性包括：在Amazon或Noon上已有需求验证，具有清晰使用场景，用户能够快速理解产品功能，适合通过图片或短视频展示，不完全依赖知名品牌，并具有组合销售或差异化包装空间。", "供应链属性包括：可以在1688找到多个供应商，支持小批量采购或一件代发，采购价格具有一定空间，补货周期相对稳定，产品规格与材质可以比较，后期具备增加采购规模的可能性。"] } },
      { title: { en: "Platform Data and Product Sourcing Method", zh: "平台数据与选品方法" }, body: { en: ["The first layer was Best Seller and competition analysis: popular products, similar-product volume, price range, ratings, reviews, homogeneity, brand dependence, bundle formats and specification options.", "The second layer was review analysis, especially low and medium ratings, to understand damage risk, image mismatch, material expectations, unclear sizing, packaging issues and possible supplier improvements.", "The third layer was China supplier matching through 1688, comparing purchase price, weight, packaging volume, MOQ, response speed, quality, dropshipping support, replenishment continuity and intellectual-property risk.", "A product had to satisfy three conditions: visible demand, executable supply chain and controllable cross-border logistics cost."], zh: ["第一层是热销与竞争分析：观察Best Seller和热门商品、同类产品数量、主流价格区间、评分和评价数量、同质化程度、品牌依赖、套装形式和规格设置。", "第二层是用户评价分析，尤其关注低评分与中等评分评论，判断产品是否容易损坏、实物是否与图片一致、材质是否符合预期、尺寸是否描述不清、包装是否影响体验，以及是否存在可以通过供应链改进的问题。", "第三层是中国供应链匹配。将平台需求与1688产品进行匹配，比较采购价格、产品重量、包装体积、起订数量、供应商响应速度、材质和质量、是否支持一件代发、是否能够持续补货，以及是否存在知识产权风险。", "选品必须同时满足：市场存在需求、供应链能够执行、跨境物流成本可控。"] } },
      { title: { en: "Product Categories Tested", zh: "测试产品品类" }, body: { en: ["Beauty tools were selected first because they usually avoid complex formulas, have lower shelf-life pressure, are easier to control in weight and size, benefit from broad China-based supplier choices, can be demonstrated in short videos, and allow single-item or bundle testing.", "Lightweight accessories with Middle Eastern cultural and aesthetic relevance were tested because they are small, light, suitable for gifting and visually strong, while requiring careful avoidance of inappropriate use of religious words, symbols or cultural combinations.", "Compact lightweight household products were tested around storage, convenience and home decoration needs, focusing on small organizers, simple life-assistance tools and products that did not require complex installation."], zh: ["第一类是美妆工具。相比直接销售化妆品和护肤产品，美妆工具通常不涉及复杂配方，保质期压力较低，体积和重量容易控制，中国供应链选择丰富，适合制作使用演示内容，也可以设计单品或组合套装。", "第二类是具有中东文化与审美元素的轻量饰品。这类产品体积小、重量低、适合礼赠、视觉展示效果较强，但选品过程中需要避免将宗教文字用于不适当位置、对宗教符号进行娱乐化使用、错误组合不同地区文化元素，或将产品描述为未经验证的宗教用品。", "第三类是轻量小家居产品，围绕收纳、便利和生活装饰需求进行测试，重点考虑小型收纳用品、简单生活辅助工具和不需要复杂安装的家用小物。"] } },
      { title: { en: "Initial Fulfillment: Dropshipping Validation", zh: "初期履约：一件代发验证需求" }, body: { en: ["At the beginning of 2023 operations, the project used dropshipping and small-batch purchasing rather than large inventory investment. This allowed multiple SKUs to be tested, reduced inventory accumulation, eliminated weak products quickly and lowered capital risk.", "The goal was not immediate scale, but to validate whether customers would click, inquire, order, and accept the product price and delivery cycle.", "Dropshipping later exposed limitations: higher single-unit logistics cost, longer delivery time, unstable tracking, weaker packaging control, higher return cost, COD refusal risk and more complex multi-platform order management."], zh: ["2023年项目正式运营初期，我没有直接进行大量备货，而是采用一件代发和小批量采购，以同时测试多个SKU、减少库存积压、快速淘汰表现较差的产品，并降低进入陌生市场的资金风险。", "这一阶段的目标不是立即规模化，而是验证消费者是否愿意点击、咨询、下单，并接受产品价格与配送周期。", "随着项目运营推进，一件代发逐渐暴露出单件跨境物流成本较高、配送时间较长、物流状态不够稳定、包装质量难以完全控制、退换货成本较高、货到付款订单可能拒收，以及多平台订单管理复杂等问题。"] } },
      { title: { en: "From Cross-Border Shipping to Localized Fulfillment", zh: "从跨境直发到本地物流履约" }, body: { en: ["After selected products completed initial validation, the project gradually developed localized inventory and fulfillment capabilities.", "The aim was to shorten delivery time, reduce some single-unit logistics costs, improve inventory control and packaging consistency, improve tracking, handle returns better, reduce COD uncertainty, and support orders across Amazon, Noon and social channels.", "The fulfillment path evolved from dropshipping multiple SKUs → identifying relatively stable products → increasing small-batch sourcing → building local inventory → coordinating with local logistics or platform fulfillment systems → improving delivery and after-sales experience. This does not mean building a large independent warehouse or logistics company."], zh: ["当部分产品完成初步需求验证后，项目开始逐步建立更本地化的备货与物流能力。", "这一转变主要为了解决缩短配送时间、降低部分订单的单件物流成本、提高库存可控性、改善包装一致性、提高订单追踪能力、更好处理退换货、降低货到付款订单不确定性，以及支持Amazon、Noon和社交渠道订单等问题。", "项目履约演进为：一件代发测试多个SKU → 识别表现相对稳定的产品 → 增加小批量采购 → 建立本地备货 → 与当地物流或平台履约体系协同 → 提升配送和售后体验。这不是自建完整物流体系、自建大型仓库或独立物流公司。"] } },
      { title: { en: "TikTok and Instagram Content Strategy", zh: "TikTok与Instagram内容策略" }, body: { en: ["Amazon and Noon captured existing search and purchase intent, while TikTok and Instagram were used for product discovery, interest generation and content testing.", "TikTok tested product demonstrations, problem-solution content, beauty-tool before-and-after effects, fast hooks, product bundles and lifestyle scenes. Instagram supported product visuals, Reels, lifestyle content, product combinations, KOL or KOC-style cooperation and early brand trust building.", "Content performance was evaluated through likes, comments, saves, inquiries, product-page clicks, platform orders, reviews and return issues, not views alone."], zh: ["Amazon和Noon主要承接明确搜索和购买需求，TikTok与Instagram则用于产品发现、兴趣激发和内容测试。", "TikTok主要测试产品使用演示、问题解决型内容、美妆工具前后效果、快节奏视频开头、产品组合展示和生活场景短视频。Instagram主要用于产品视觉展示、Reels短视频、生活方式内容、产品组合和使用场景、KOL或KOC内容合作，以及品牌视觉和信任积累。", "内容效果不仅观察播放量，还结合点赞、评论、收藏、用户咨询、产品页面点击、平台订单、用户评价和退换货问题。"] } },
      { title: { en: "Project Results", zh: "项目成果" }, body: { en: ["1. Built a Middle East market-entry analysis framework covering market growth, platform ecosystems, cultural differences, payment behavior and logistics conditions.", "2. Completed Amazon and Noon product research around hot-selling products, prices, reviews and competition.", "3. Developed a lightweight product selection strategy around beauty tools, lightweight accessories with Middle Eastern cultural and aesthetic relevance, and compact lightweight household products.", "4. Built a China-based supplier matching process through 1688 and supplier comparison.", "5. Used dropshipping to reduce early risk and adjusted SKUs based on orders and feedback.", "6. Gradually developed localized inventory and fulfillment capabilities after selected products showed more stable demand.", "7. Used TikTok and Instagram content tests together with Amazon and Noon orders and reviews to support product iteration.", "8. Within six months, international channel performance grew by over 30%, and selected best-performing products exceeded 100 units in monthly sales. These are project operating results, not third-party market data."], zh: ["1. 建立中东市场进入分析框架，从市场增长、平台生态、文化差异、支付方式与物流条件等方面判断市场机会。", "2. 完成Amazon和Noon产品研究，分析热销产品、价格区间、用户评价与竞争情况。", "3. 形成轻量化选品策略，优先选择美妆工具、中东文化审美元素饰品和轻量小家居，控制跨境配送与退货风险。", "4. 建立中国供应链匹配流程，通过1688和供应商对比采购价格、材质、产品重量、包装和补货能力。", "5. 通过一件代发降低早期风险，并根据订单和反馈调整SKU。", "6. 在部分产品需求相对稳定后，逐步建立本地备货和物流能力。", "7. 通过TikTok、Instagram进行产品内容测试，并与Amazon和Noon的订单与评价数据共同支持产品迭代。", "8. 六个月内国际渠道增长30%以上，部分热销单品月销量超过100件。该数据来自项目运营经历，不属于第三方市场数据。"] } },
      { title: { en: "Project Methodology", zh: "项目方法论" }, body: { en: ["Step 1: Use macro trends to judge market direction.", "Step 2: Choose a low-risk entry market, using the UAE as the main entry point and Amazon and Noon as transaction infrastructure.", "Step 3: Include culture, religious sensitivity, aesthetics and use cases in product selection.", "Step 4: Use logistics attributes to control risk by prioritizing light, small, durable and easy-to-demonstrate products.", "Step 5: Validate demand through platform data such as Best Seller lists, prices, reviews and competition.", "Step 6: Match China-based suppliers through price, material, supplier capability, MOQ and logistics cost.", "Step 7: Test through dropshipping before carrying significant inventory.", "Step 8: Expand product discovery through TikTok and Instagram.", "Step 9: Upgrade fulfillment according to results."], zh: ["第一步：从宏观趋势判断市场方向。", "第二步：选择低风险进入市场，以阿联酋作为主要切入点，通过Amazon和Noon利用现有交易基础。", "第三步：结合本地文化筛选产品，将文化适配、宗教敏感性、审美和使用场景纳入选品决策。", "第四步：用物流属性控制风险，优先选择轻、小、不易破损、容易展示的产品。", "第五步：用平台数据验证需求，通过热销榜单、价格、评论和竞争情况判断产品机会。", "第六步：匹配中国供应链，比较采购价格、材质、供应商能力、起订量和物流成本。", "第七步：通过一件代发进行测试，在不大量压货的情况下观察点击、咨询、订单与评价。", "第八步：通过TikTok和Instagram扩大产品发现。", "第九步：根据结果升级履约。"] } },
      { title: { en: "Reflection", zh: "项目反思" }, body: { en: ["This project taught me that cross-border e-commerce is not about directly pushing low-priced domestic products into overseas markets.", "Effective market entry requires understanding why this market is selected, why consumers buy, which platforms can validate demand, how culture and religion influence acceptance, how payment methods affect refusal and cash flow, how product weight and volume affect cost, what advantages China-based supply chains can provide, and when to move from dropshipping to localized inventory.", "Dropshipping reduced early inventory risk, but also exposed delivery speed, single-unit logistics cost and return-experience problems. Localized inventory was therefore a staged upgrade after selected products completed early validation.", "This experience gave me a more complete understanding of GTM: market entry is a continuous decision process from market judgment, consumer insight, product selection, supply-chain matching, content validation and fulfillment upgrade."], zh: ["这个项目让我认识到，跨境电商的核心不是将国内低价商品直接销售到海外。", "真正有效的市场进入，需要同时理解为什么选择这个市场、消费者为什么购买、哪些平台适合完成验证、文化和宗教如何影响产品接受度、支付方式如何影响拒收和回款、产品重量与体积如何影响成本、中国供应链可以提供什么优势，以及什么时候应该从一件代发转向本地库存。", "项目早期的一件代发降低了库存风险，但也暴露出配送速度、单件物流成本和退换货体验等问题。因此，本地备货不是从项目开始就进行的重投入，而是在部分产品完成初步验证后，为改善履约体验进行的阶段性升级。", "这一经历让我形成了对GTM更完整的理解：市场进入不是一次性的渠道选择，而是从市场判断、消费者洞察、产品筛选、供应链匹配、内容验证到履约升级的连续决策过程。"] } },
      { title: { en: "Core Capabilities", zh: "核心能力" }, body: { en: ["Middle East Market Research / Market Entry Strategy / Cross-cultural Consumer Insight / Amazon and Noon Platform Analysis / Product and Category Strategy / China-based Supply Chain Sourcing / Supplier Development / TikTok and Instagram Content Marketing / Logistics and Fulfillment Optimization / Low-inventory Market Validation / Data-driven Product Iteration / Go-to-market Execution"], zh: ["中东市场研究 / 市场进入策略 / 跨文化消费者洞察 / Amazon与Noon平台分析 / 产品与品类策略 / 中国供应链整合 / 供应商开发 / TikTok与Instagram内容营销 / 物流与履约优化 / 低库存市场验证 / 数据驱动产品迭代 / GTM执行"] } },
      { title: { en: "Capabilities Proven", zh: "证明的能力" }, body: { en: ["Middle East Market Research / Market Entry Strategy / Cross-cultural Consumer Insight / Amazon and Noon Platform Analysis / Product and Category Strategy / China-based Supply Chain Sourcing / Supplier Development / TikTok and Instagram Content Marketing / Logistics and Fulfillment Optimization / Low-inventory Market Validation / Data-driven Product Iteration / Go-to-market Execution"], zh: ["中东市场研究 / 市场进入策略 / 跨文化消费者洞察 / Amazon与Noon平台分析 / 产品与品类策略 / 中国供应链整合 / 供应商开发 / TikTok与Instagram内容营销 / 物流与履约优化 / 低库存市场验证 / 数据驱动产品迭代 / GTM执行"] } },
      { title: { en: "What This Proves", zh: "这个案例证明了什么" }, body: { en: ["This case demonstrates my ability to translate macro market signals into a practical market-entry strategy and execute through platform analysis, cross-cultural product selection, China-based supply chain sourcing, content marketing and logistics iteration."], zh: ["这一案例证明，我能够将宏观市场趋势转化为具体市场进入策略，并通过平台分析、跨文化选品、中国供应链、内容营销和物流迭代完成商业执行。"] } },
      { title: { en: "Project Summary", zh: "项目总结" }, body: { en: ["In 2022, I began researching Middle East cross-border e-commerce opportunities based on regional digital consumption growth, UAE e-commerce development and China-based supply chain conditions.", "I selected the UAE as the main entry point, analyzed hot-selling products, pricing, user reviews and competition across Amazon and Noon, and included cultural fit, payment behavior, logistics cost and return risk in product decisions.", "The project initially tested multiple SKUs through dropshipping and small-batch sourcing, used TikTok and Instagram to test consumer interest, and combined content feedback with platform orders and user reviews.", "As selected products completed initial validation, the project gradually added localized inventory and fulfillment capabilities to improve delivery speed, packaging control and order execution.", "This project shows my ability to translate macro market trends into a concrete market-entry strategy and execute through platform analysis, cross-cultural product selection, China-based supply chain sourcing, content marketing and logistics iteration."], zh: ["2022年，我基于中东数字消费发展、阿联酋电商增长和中国供应链条件，开始研究中东跨境电商机会。", "我选择阿联酋作为主要切入点，通过Amazon和Noon分析热销产品、价格、用户评价与市场竞争，并将文化适配、支付习惯、物流成本和退货风险纳入选品决策。", "项目初期通过一件代发和小批量采购测试多个SKU，降低库存积压风险；通过TikTok和Instagram测试消费者兴趣，并将内容反馈与平台订单和用户评价结合。", "随着部分产品完成初步市场验证，项目逐步增加本地备货与物流能力，改善配送速度、包装控制和订单履约。", "这一项目证明，我能够将宏观市场趋势转化为具体市场进入策略，并通过平台分析、跨文化选品、中国供应链、内容营销和物流迭代，完成从机会判断到商业执行的闭环。"] } },
    ],
  },  {
    "id": "government-business",
    "title": {
      "en": "XinYin 1950 Urban Renewal & Commercial Revitalization",
      "zh": "新印1950城市更新与商业活化项目"
    },
    "subtitle": {
      "en": "From identifying the potential of an underused industrial site to stakeholder coordination, brand activation and consumer-scene validation",
      "zh": "从旧工业空间识别机会，到政企协调、品牌策划与消费场景激活"
    },
    "image": "/images/cases/kaoba167.png",
    "meta": [
      {
        "label": {
          "en": "Location",
          "zh": "项目地点"
        },
        "value": {
          "en": "Yunyan District, Guiyang, Guizhou",
          "zh": "贵州省贵阳市云岩区"
        }
      },
      {
        "label": {
          "en": "Project Type",
          "zh": "项目类型"
        },
        "value": {
          "en": "Urban Renewal / Commercial Revitalization / Government-Business Collaboration / Brand Marketing",
          "zh": "城市更新、商业活化、政企合作、品牌营销"
        }
      },
      {
        "label": {
          "en": "My Role",
          "zh": "我的角色"
        },
        "value": {
          "en": "Market Research / Government-Business Coordination / Brand Strategy / Project Advancement",
          "zh": "市场调研、政企协调、品牌策划与项目推进"
        }
      },
      {
        "label": {
          "en": "Project Scale",
          "zh": "项目规模"
        },
        "value": {
          "en": "Over RMB 200 million in project investment",
          "zh": "单体投资规模超2亿元"
        }
      }
    ],
    "metrics": [
      {
        "en": "Led market research for the former Xinhua Printing Factory site",
        "zh": "主导新华印刷厂旧厂区市场调研"
      },
      {
        "en": "Coordinated government departments, Guomao Group, Snow Beer, local media, and merchants",
        "zh": "协调政府、国贸集团、雪花啤酒、媒体及本地商户资源"
      },
      {
        "en": "Proposed the Spring Festival Snow Beer Cultural Market to validate consumer-scene potential before project completion",
        "zh": "提出春节雪花啤酒文化集市方案，在项目建成前验证消费场景潜力"
      },
      {
        "en": "Supported the advancement of XinYin 1950, with over RMB 200 million in project investment",
        "zh": "支持投资规模超2亿元的新印1950城市更新项目推进"
      }
    ],
    "sections": [
      {
        "title": {
          "en": "Project Overview",
          "zh": "项目概述"
        },
        "body": {
          "en": [
            "The XinYin 1950 project is located in Yunyan District, Guiyang. It was developed from the renewal of the former Xinhua Printing Factory site.",
            "As industrial production functions gradually moved out of the old urban district, the original use of the Xinhua Printing Factory became increasingly constrained, and the old factory site needed a new functional position aligned with urban development. At the same time, some of Guomao Group's commercial assets in the old district were facing weaker consumer attraction, limited appeal to younger customers, and declining commercial vitality.",
            "Against this backdrop, I participated in coordinating early-stage business discussions among relevant government departments, Guomao Group, and other partners, supporting the formation of an initial cooperation intention around the renewal of the former Xinhua Printing Factory site.",
            "To determine the right commercial positioning for the old factory site, I led research into the surrounding market, consumer groups, and commercial formats. Based on the research findings, I proposed a commercial revitalization direction centered on industrial heritage, local food culture, the night economy, and young consumers.",
            "Before XinYin 1950 was formally completed, I also identified a cooperation opportunity with Snow Beer and proposed holding the Spring Festival Snow Beer Cultural Market at the former factory site. The goal was to activate the space in stages, validate young-consumer potential, increase regional attention, and accumulate market awareness for the project's later positioning.",
            "I also participated in connecting government stakeholders, media, and local heritage restaurants. Through award plaques, media coverage, short-video check-ins, and offline communication, we improved the exposure of local heritage brands and gradually integrated scattered food, night-market, bar, and cultural resources into a more recognizable urban consumption scene."
          ],
          "zh": [
            "新印1950项目位于贵阳市云岩区，由原新华印刷厂旧厂区更新改造而来。",
            "随着老城区工业生产功能逐步退出，新华印刷厂原有用途受到限制，旧厂区需要重新寻找适合城市发展的功能定位。与此同时，国贸集团在老城区的部分商业载体也面临消费吸引力不足、年轻客群有限和整体商业活力下降等问题。",
            "在这一背景下，我参与协调相关政府部门、国贸集团及其他合作方开展前期商务洽谈，推动各方围绕新华印刷厂旧厂区改造形成初步合作意向。",
            "为判断旧厂区应采用怎样的商业定位，我主导开展项目周边市场、消费人群和商业业态调研，并基于调研结果提出以工业遗存、本地餐饮文化、夜间经济和年轻消费为核心的商业活化方向。",
            "在新印1950正式建成之前，我还结合与雪花啤酒的合作机会，提出在旧厂区举办春节雪花啤酒文化集市，通过阶段性活动提前激活空间、验证年轻消费潜力、提升区域关注度，并为后续项目定位积累市场认知。",
            "同时，我参与推动政府、媒体与本地老字号餐饮联动，通过授牌、媒体报道、短视频打卡和线下传播等方式，提升本地老字号品牌曝光，并逐步将分散的餐饮、夜市、酒吧和文化资源整合为具有统一认知的城市消费场景。"
          ]
        }
      },
      {
        "title": {
          "en": "Project Background",
          "zh": "项目背景"
        },
        "body": {
          "en": [
            "1. The old industrial space needed to be repositioned. The former Xinhua Printing Factory was located in Guiyang's old urban district. As the city's industrial structure changed and industrial production gradually withdrew from the old district, the original production function of the site became limited. The space needed a new use that matched the city's development direction.",
            "The project was not simply about renovating buildings. The real question was how an old industrial space, after leaving its original production function, could re-enter urban life and create sustainable commercial and cultural value.",
            "2. Commercial vitality in the old district was insufficient. Guomao Group already had a commercial presence in the old district, but some assets faced relatively traditional formats, limited attraction to younger customers, a lack of diverse consumption scenes, and insufficient connection with surrounding night markets and food resources.",
            "Simply copying the traditional shopping-center model would not create real differentiation.",
            "3. Multiple parties were willing to cooperate, but there was no unified direction. The project involved government departments, Guomao Group, old-factory stakeholders, surrounding merchants, brand partners, media, and the local community.",
            "In the early stage, different parties recognized the need to renew the old factory site, but had not yet aligned on positioning, business model, resource introduction, or implementation path."
          ],
          "zh": [
            "1. 老工业空间需要重新定位。新华印刷厂位于贵阳老城区。随着城市产业结构调整和老城区工业生产活动逐步退出，旧厂区原有生产功能受到限制，空间需要重新寻找符合城市发展方向的用途。",
            "项目要解决的不是简单翻新建筑，而是旧工业空间退出原有用途后，如何重新进入城市生活，并形成可持续的商业和文化价值。",
            "2. 老城区商业活力不足。国贸集团在老城区已有一定商业布局，但部分商业载体面临业态相对传统、年轻客群吸引力不足、消费场景单一及与周边夜市、餐饮资源缺少联动等问题。",
            "如果只是复制传统购物中心模式，很难形成真正的差异化。",
            "3. 多方有合作意愿，但缺少统一方向。项目涉及政府部门、国贸集团、旧厂区相关主体、周边商户、品牌方、媒体和社区等多方利益相关者。",
            "在项目初期，各方认可旧厂区改造的必要性，但对于项目定位、商业模式、资源导入和推进路径尚未形成统一认识。"
          ]
        }
      },
      {
        "title": {
          "en": "Core Challenges",
          "zh": "核心挑战"
        },
        "body": {
          "en": [
            "1. How to find a new commercial function for an old industrial space.",
            "2. How to reactivate consumption in the old urban district.",
            "3. How to attract younger consumer groups.",
            "4. How to coordinate government, enterprise, brand, media, and merchant resources.",
            "5. How to validate market potential before the project was formally completed."
          ],
          "zh": [
            "1. 如何为旧工业空间找到新的商业功能。",
            "2. 如何重新激活老城区消费。",
            "3. 如何吸引年轻消费群体。",
            "4. 如何协调政府、企业、品牌、媒体和商户等多方资源。",
            "5. 如何在项目正式建成前验证市场潜力。"
          ]
        }
      },
      {
        "title": {
          "en": "My Role & Responsibilities",
          "zh": "我的角色与职责"
        },
        "body": {
          "en": [
            "1. Coordinated early-stage business communication among relevant government departments, Guomao Group, and partners.",
            "2. Supported the formation of an initial cooperation intention around the renewal of the former Xinhua Printing Factory site.",
            "3. Led research into surrounding commerce, restaurants, night markets, bars, and young consumer groups.",
            "4. Analyzed the area's consumption potential and commercial revitalization opportunities.",
            "5. Organized research findings into project recommendations and reported them to relevant departments.",
            "6. Proposed a commercial positioning centered on heritage restaurants, local food, the night economy, and industrial space.",
            "7. Proposed the Spring Festival Snow Beer Cultural Market during cooperation discussions with Snow Beer.",
            "8. Coordinated brand, venue, government, and surrounding commercial resources.",
            "9. Supported collaboration between local media outlet 百姓关注 and local heritage merchants.",
            "10. Planned award plaques, media coverage, Douyin check-ins, and urban communication activities.",
            "11. Supported the XinYin 1950 project in moving from cooperation intention toward further implementation."
          ],
          "zh": [
            "1. 协调相关政府部门、国贸集团及合作方进行前期商务沟通。",
            "2. 推动各方围绕新华印刷厂旧厂区改造形成初步合作意向。",
            "3. 主导开展周边商业、餐饮、夜市、酒吧及年轻消费人群调研。",
            "4. 分析项目区域的消费潜力和商业活化机会。",
            "5. 将调研结果整理为项目建议并向相关部门汇报。",
            "6. 提出以老字号、本地餐饮、夜间经济和工业空间为核心的商业定位。",
            "7. 在与雪花啤酒合作过程中提出春节雪花啤酒文化集市方案。",
            "8. 协调品牌、场地、政府和周边商业资源。",
            "9. 推动“百姓关注”等媒体与本地老字号商户联动。",
            "10. 策划授牌、媒体报道、抖音打卡和城市传播活动。",
            "11. 支持新印1950项目从合作意向向进一步落地推进。"
          ]
        }
      },
      {
        "title": {
          "en": "Project Process",
          "zh": "项目推进过程"
        },
        "body": {
          "en": [
            "Stage 1: Identifying an urban renewal and commercial cooperation opportunity. The opportunity came from two simultaneous issues: the Xinhua Printing Factory site needed a new use as industrial functions withdrew from the old district, while some of Guomao Group's old-district commercial assets needed new growth points and younger consumer entry points.",
            "I participated in coordinating business communication between relevant government departments and Guomao Group around old-factory renewal, commercial resource introduction, and old-district consumption upgrading.",
            "During communication, I focused on clarifying the core objectives of different participants: government stakeholders cared about old-city renewal, city image, and regional consumption; the enterprise cared about long-term traffic and commercial return; surrounding merchants cared about exposure and business growth; consumers cared about distinctive food, leisure, and social scenes.",
            "Through continued coordination, the parties gradually formed an initial intention to cooperate on urban renewal at the former Xinhua Printing Factory site.",
            "Stage 2: Leading market research and identifying regional consumption potential. I researched surrounding resident and floating consumers, heritage restaurants and specialty food, night markets and nighttime consumption, bars and leisure formats, young consumer activity zones and habits, strengths and weaknesses of nearby commercial assets, traffic differences across time periods, and potential synergy between the old factory site and surrounding commerce.",
            "Research finding 1: Heritage restaurants still had stable attraction. Several locally recognized heritage and specialty restaurants were clustered near the former factory site. These merchants had stable customer bases and carried Guiyang's local food culture and urban memory, but lacked unified brand packaging and youth-oriented communication.",
            "This showed that the old district did not lack valuable commercial content. What it lacked was resource integration, brand expression, and scene upgrading.",
            "Research finding 2: Young consumers were already present. Nighttime bars, night markets, and leisure formats around the site continued to attract young people. Young consumers were not unwilling to enter the old district; they lacked a comprehensive scene that combined food, social interaction, leisure, check-ins, and content sharing.",
            "Research finding 3: Night markets and food resources formed a natural traffic base. Heritage restaurants provided cultural content, night markets provided continuous traffic, bars extended consumption time, and the old factory site offered a distinctive space. If these resources were connected effectively, they could form a complete consumption chain from daytime to nighttime."
          ],
          "zh": [
            "阶段一：识别城市更新与商业合作机会。项目机会来自两个同时存在的问题。一方面，新华印刷厂因老城区工业功能逐步退出，原有厂区需要寻找新的使用方式。另一方面，国贸集团在老城区的部分商业体缺乏持续活力，需要寻找新的商业增长点和年轻消费入口。",
            "我参与协调相关政府部门与国贸集团开展商务沟通，围绕旧厂区改造、商业资源导入和老城区消费升级进行多轮洽谈。",
            "在沟通过程中，我重点梳理不同参与方的核心诉求：政府关注旧城更新、城市形象和区域消费；企业关注长期客流和商业回报；周边商户关注曝光与经营增长；消费者关注更有特色的餐饮、休闲与社交场景。",
            "通过持续协调，各方逐步形成在新华印刷厂旧厂区开展城市更新合作的初步意向。",
            "阶段二：主导市场调研，识别区域消费潜力。我围绕周边常住和流动消费人群、老字号及特色餐饮分布、夜市和夜间消费情况、酒吧及休闲娱乐业态、年轻消费者活动区域与消费习惯、周边商业体优势与不足、不同消费时段的客流和场景差异，以及旧厂区与周边商业之间的协同可能性开展调研。",
            "调研发现一：老字号仍具有稳定吸引力。新华印刷厂附近聚集了多家具备本地认知度的老字号和特色餐饮。这些商户拥有稳定客群，也承载贵阳本地饮食文化和城市记忆，但缺少统一品牌包装和年轻化传播。",
            "这说明老城区并不缺少有价值的商业内容，真正缺少的是资源整合、品牌表达和场景升级。",
            "调研发现二：年轻消费者已经存在。项目周边夜间存在酒吧、夜市和休闲消费业态，能够持续吸引年轻人。年轻消费群体并不是不愿意进入老城区，而是缺少一个能够同时满足餐饮、社交、休闲、打卡和内容分享需求的综合场景。",
            "调研发现三：夜市与餐饮形成天然客流基础。老字号提供文化内容，夜市提供持续客流，酒吧业态延长消费时间，旧厂区则能够提供具有辨识度的空间。如果将这些资源有效连接，可以形成从白天到夜间的完整消费链路。"
          ]
        }
      },
      {
        "title": {
          "en": "Core Market Insights",
          "zh": "核心市场洞察"
        },
        "body": {
          "en": [
            "Insight 1: The old district did not lack demand; it lacked scene organization. Real consumers, food resources, and nighttime consumption already existed nearby. The issue was that these resources were scattered and had not formed unified recognition, a complete movement path, or sustained communication.",
            "Insight 2: Heritage restaurants could become brand assets. Their locality, authenticity, and stories could be upgraded from individual food merchants into part of a city cultural experience through brand packaging, media communication, award plaques, store visits, short videos, and themed events.",
            "Insight 3: Industrial heritage itself had marketing value. The former Xinhua Printing Factory differed from traditional commercial spaces. Its industrial architecture, historical memory, and site atmosphere had content value and could host brand events, festival markets, cultural exhibitions, and city check-ins.",
            "Insight 4: Urban renewal needs to build awareness before introducing consumption. Before formal completion, the project should not remain closed and passive. Staged activities could allow consumers to enter the space early, build market memory, and test whether the positioning was truly attractive."
          ],
          "zh": [
            "洞察一：老城区缺少的不是需求，而是场景组织。周边已经存在真实消费者、餐饮资源和夜间消费基础。问题不在于有没有人消费，而在于这些资源彼此分散，没有形成统一认知、完整动线和持续传播。",
            "洞察二：老字号可以成为品牌资产。老字号具有地域性、真实性和故事性。通过品牌包装、媒体传播、授牌、探店、短视频和主题活动，老字号可以从单一餐饮商户升级为城市文化体验的一部分。",
            "洞察三：工业遗存本身具有营销价值。新华印刷厂旧厂区区别于传统商业空间，工业建筑、历史记忆和场地氛围本身就具有内容传播价值。它能够承载品牌活动、节庆集市、文化展览和城市打卡。",
            "洞察四：城市更新需要先建立认知，再导入消费。项目正式建成前，不应长期处于封闭等待状态。通过阶段性活动，可以提前让消费者进入空间，形成市场记忆，并验证项目定位是否真正具有吸引力。"
          ]
        }
      },
      {
        "title": {
          "en": "Commercial Positioning & Brand Strategy",
          "zh": "商业定位与品牌策划思路"
        },
        "body": {
          "en": [
            "1. Combine industrial heritage with urban culture by retaining the spatial character of the former Xinhua Printing Factory and transforming it from a production space into a cultural-commercial space with urban memory.",
            "2. Combine local heritage restaurants with modern consumption by introducing Guiyang food brands and heritage resources, then using unified planning and youth-oriented communication to place traditional food into a new consumption context.",
            "3. Combine daytime culture with the night economy by supporting leisure, culture, dining, and city experiences during the day, while extending consumption time through bars, night markets, markets, and social activities at night.",
            "4. Combine offline activities with content communication through brand partnerships, festival events, short-video check-ins, media coverage, and store-visit content, making the project not only a consumption space but also sustainable urban content."
          ],
          "zh": [
            "1. 工业遗存与城市文化结合。保留新华印刷厂原有空间特征，将旧厂区从生产空间转化为具有城市记忆的文化商业空间。",
            "2. 本地老字号与现代消费结合。导入具有贵阳特色的餐饮品牌和老字号资源，并通过统一策划和年轻化传播，让传统餐饮进入新的消费语境。",
            "3. 日间文化与夜间经济结合。白天承接休闲、文化、餐饮和城市体验，夜间通过酒吧、夜市、集市和社交活动延长消费时间。",
            "4. 线下活动与内容传播结合。通过品牌合作、节庆活动、短视频打卡、媒体报道和探店内容，使项目不仅是消费空间，也成为可持续传播的城市内容。"
          ]
        }
      },
      {
        "title": {
          "en": "Spring Festival Snow Beer Cultural Market",
          "zh": "雪花啤酒文化集市：项目建成前的消费场景验证"
        },
        "body": {
          "en": [
            "Before XinYin 1950 was formally completed, I participated in cooperation communication with Snow Beer. Based on earlier research, I proposed using the old factory site's industrial space and young-consumer potential to hold the Spring Festival Snow Beer Cultural Market during the Spring Festival period.",
            "This was not simply a beer festival. It was designed as brand preheating and market validation before the project formally landed.",
            "The activity aimed to activate the idle old factory site early, test young people's acceptance of the space, connect Snow Beer with local consumption scenes, link surrounding heritage restaurants, night markets, and food resources, increase urban attention around the site, and accumulate market awareness for later tenant attraction and communication.",
            "The planning logic was based on the Spring Festival's strong family gathering, social, and festive consumption demand; Snow Beer's mass brand recognition; and the old factory site's differentiated spatial experience. Beer, food, cultural market content, festival atmosphere, and social scenes could temporarily transform an idle industrial space into an urban consumption destination.",
            "For Snow Beer, the activity helped the brand enter a more locally rooted consumption scene. For the old factory site, Snow Beer brought awareness, activity content, and communication resources. For surrounding merchants, it increased traffic and brand exposure. For the government, it helped activate old-district consumption before formal project completion."
          ],
          "zh": [
            "在新印1950正式建成前，我参与与雪花啤酒的合作沟通。结合前期调研，我提出利用新华印刷厂旧厂区的工业空间和年轻消费潜力，在春节期间举办雪花啤酒文化集市。",
            "这一建议并不是单纯举办一次啤酒节，而是将其作为项目正式落地前的品牌预热和市场验证。",
            "活动目标包括：提前激活闲置旧厂区；验证年轻人对该空间的接受度；将雪花啤酒品牌与本地消费场景结合；联动周边老字号、夜市和餐饮资源；提升新华印刷厂旧厂区的城市关注度；为新印1950后续招商和传播积累市场认知。",
            "活动策划逻辑是：春节具备较强的家庭聚会、社交和节庆消费需求，雪花啤酒具有大众品牌认知，旧厂区则提供差异化空间体验。通过啤酒、餐饮、文化集市、节庆内容和社交场景的组合，可以将原本闲置的工业空间临时转化为城市消费目的地。",
            "对雪花啤酒而言，活动能够帮助品牌进入更具本地文化特色的消费场景；对旧厂区而言，雪花品牌能够带来认知度、活动内容和传播资源；对周边商户而言，活动能够增加客流和品牌曝光；对政府而言，活动能够在项目正式建成前逐步激活老城区消费。"
          ]
        }
      },
      {
        "title": {
          "en": "Heritage-Brand Activation & Media Collaboration",
          "zh": "老字号品牌激活与媒体联动"
        },
        "body": {
          "en": [
            "I participated in promoting joint communication among government stakeholders, media, and local heritage merchants. This included connecting with local media outlet 百姓关注 to award recognition plaques to representative Guiyang heritage merchants and increase attention through media coverage, short videos, and offline activities.",
            "The strategy included using government and media participation to provide brand endorsement for heritage merchants; developing communication around their history, signature products, local culture, and urban memory; using Douyin check-ins, short-video store visits, offline plaques, and event communication for youth-oriented expression; and integrating multiple heritage restaurants, night markets, bars, and the old factory site into a more unified regional brand perception."
          ],
          "zh": [
            "我参与推动政府、媒体和本地老字号开展联合推广。其中包括联动本地媒体“百姓关注”，为具有代表性的贵阳老字号商户授予相关荣誉牌匾，并通过媒体报道、短视频及线下活动提升关注度。",
            "具体策略包括：通过政府与媒体共同参与，为老字号提供品牌背书；围绕老字号历史、特色产品、本地文化和城市记忆策划传播内容；结合抖音打卡、短视频探店、线下授牌和活动传播进行年轻化表达；将多个老字号、夜市、酒吧和旧厂区整合为区域品牌认知。"
          ]
        }
      },
      {
        "title": {
          "en": "My Coordination Method",
          "zh": "我的协调方法"
        },
        "body": {
          "en": [
            "1. Understand each party's objectives first: government stakeholders cared about regional renewal and public value; enterprises cared about commercial return and long-term traffic; brands cared about exposure, consumer reach, and scene value; media cared about content and public topics; merchants cared about traffic, brand endorsement, and business growth.",
            "2. Identify shared interests. For example, the Spring Festival Snow Beer Cultural Market could provide a consumption scene for the brand, increase attention for the old factory site, and bring traffic to surrounding merchants.",
            "3. Translate research information into decision language. I did not simply report which merchants existed nearby. I explained why these resources had commercial value, why young people would be willing to enter the area, and how different resources could be combined into an executable plan.",
            "4. Reduce cooperation uncertainty through staged actions. Market research, brand activities, media collaboration, and small-scale scene testing helped gradually prove project potential before promoting longer-term cooperation."
          ],
          "zh": [
            "1. 先理解各方目标：政府关注区域更新和社会效益；企业关注商业回报和长期客流；品牌关注曝光、消费者触达和场景价值；媒体关注内容传播和社会话题；商户关注客流、品牌背书和经营增长。",
            "2. 寻找共同利益。例如，雪花啤酒文化集市既能为品牌提供消费场景，也能为旧厂区增加关注度，还能为周边商户导入客流。",
            "3. 将调研信息转化为决策语言。不只汇报周边有哪些商户，而是解释这些资源为什么具有商业价值、为什么年轻人愿意进入该区域，以及不同资源如何组合为可执行方案。",
            "4. 通过阶段性动作降低合作不确定性。通过市场调研、品牌活动、媒体联动和小型场景测试，逐步证明项目潜力，再推动长期合作。"
          ]
        }
      },
      {
        "title": {
          "en": "Project Outcomes",
          "zh": "项目成果"
        },
        "body": {
          "en": [
            "1. Supported the formation of an initial cooperation intention around the old factory renewal through early-stage business communication and government coordination among relevant departments, Guomao Group, and partners.",
            "2. Led market and consumer-scene research around heritage restaurants, night markets, bars, young consumers, and surrounding commerce, providing market evidence for project positioning.",
            "3. Helped form a differentiated commercial positioning centered on industrial heritage, local culture, food and night economy, and young consumers.",
            "4. Proposed the Spring Festival Snow Beer Cultural Market based on research findings, using brand activation to validate consumption potential, activate the space, and increase attention before formal project completion.",
            "5. Promoted heritage-brand communication by linking government stakeholders, media, and local merchants through award plaques, coverage, short videos, and offline activities.",
            "6. Organized research conclusions, brand planning, and activity-validation findings into recommendations and reported them again to support the further advancement of XinYin 1950."
          ],
          "zh": [
            "1. 推动旧厂区改造形成初步合作意向。通过前期商务沟通与政府协调，推动相关部门、国贸集团及合作方围绕新华印刷厂旧厂区更新形成初步合作方向。",
            "2. 主导完成市场与消费场景调研。围绕老字号、夜市、酒吧、年轻消费者和周边商业开展调研，为项目定位提供市场依据。",
            "3. 形成差异化商业定位。推动项目形成以工业遗存、本地文化、餐饮夜经济和年轻消费为核心的商业活化方向。",
            "4. 提出雪花啤酒文化集市方案。基于调研发现，提出在旧厂区举办春节雪花啤酒文化集市，以品牌活动提前验证消费潜力、激活空间并提升关注度。",
            "5. 推动老字号品牌传播。联动政府、媒体和本地商户，通过授牌、报道、短视频及线下活动提升老字号品牌认知。",
            "6. 支持新印1950项目进一步推进。将调研结论、品牌策划和活动验证结果形成建议并再次上报，为新印1950项目后续推进提供支持。"
          ]
        }
      },
      {
        "title": {
          "en": "Reflection",
          "zh": "项目反思"
        },
        "body": {
          "en": [
            "The XinYin 1950 project taught me that urban renewal is not simply old-building renovation, nor is it only tenant attraction.",
            "Effective urban commercial revitalization needs to answer three questions at the same time: what resources already exist here, what scenes consumers truly need, and why different partners would be willing to participate together.",
            "In this project, I connected market research, government coordination, brand partnership, media communication, and commercial planning.",
            "I identified young-consumer and local-culture opportunities through research, supported stakeholder alignment through business communication, proposed the Spring Festival Snow Beer Cultural Market to activate the space early, improved regional brand awareness through media and heritage-restaurant collaboration, and translated these staged outcomes into support for the continued advancement of XinYin 1950.",
            "This experience gave me a more complete understanding of marketing: marketing is not only communication and exposure. It is also about understanding markets, defining value, designing scenes, integrating resources, and motivating consumers, brands, and partners to participate together."
          ],
          "zh": [
            "新印1950项目让我认识到，城市更新并不是简单的旧建筑改造，也不是单纯招商。",
            "真正有效的城市商业活化，需要同时回答三个问题：这里原本拥有什么资源？消费者真正需要什么场景？不同合作方为什么愿意共同参与？",
            "在这个项目中，我将市场调研、政府协调、品牌合作、媒体传播和商业策划连接起来。",
            "我通过调研识别年轻消费和本地文化机会，通过商务沟通推动各方形成合作意向，通过雪花啤酒文化集市提前激活空间，通过媒体和老字号联动提升区域品牌认知，并将这些阶段性成果转化为新印1950项目继续推进的依据。",
            "这段经历让我形成了对Marketing更完整的理解：营销不仅是传播和曝光，更是理解市场、定义价值、设计场景、整合资源，并推动消费者、品牌与合作方共同参与。"
          ]
        }
      },
      {
        "title": {
          "en": "Core Capabilities",
          "zh": "核心能力"
        },
        "body": {
          "en": [
            "Stakeholder Coordination / Market Research / Brand Strategy / Event Marketing / Resource Integration / Project Advancement / Business Insight / Government-Business Communication / Consumer Insight / Regional Marketing"
          ],
          "zh": [
            "多方协调 / 市场调研 / 品牌策划 / 活动营销 / 资源整合 / 项目推进 / 商业洞察 / 政企沟通 / 消费者洞察 / 区域营销"
          ]
        }
      }
    ]
  },
] as const;

export const homeHeroContent = {
  titleLines: {
    en: ["Building Transferable Capabilities", "Through Real Transitions"],
    zh: ["从真实转变中，", "建立可迁移能力"],
  },
  accent: { en: "Transferable", zh: "可迁移" },
  subtitle: {
    en: "From government–business collaboration and online education to Middle East e-commerce GTM, I have developed transferable capabilities in market research, customer insight, product strategy, stakeholder coordination and execution across different markets and business contexts.",
    zh: "从政企合作、在线教育到中东跨境电商GTM，我形成了市场研究、用户洞察、产品策略、多方协调与项目落地能力，并能够将这些能力迁移到新的市场与商业场景中。",
  },
  advantage: {
    en: "From government–business collaboration and online education to Middle East e-commerce GTM, I have developed transferable capabilities in market research, customer insight, product strategy, stakeholder coordination and execution across different markets and business contexts.",
    zh: "从政企合作、在线教育到中东跨境电商GTM，我形成了市场研究、用户洞察、产品策略、多方协调与项目落地能力，并能够将这些能力迁移到新的市场与商业场景中。",
  },
  logic: {
    en: "",
    zh: "",
  },
  capabilityPath: {
    en: [],
    zh: [],
  },  positioning: {
    en: "",
    zh: "",
  },
  locations: {
    en: ["China", "France", "Finland", "Middle East"],
    zh: ["中国", "法国", "芬兰", "中东"],
  },
  locationLabel: {
    en: "Cross-cultural learning and market practice",
    zh: "跨文化学习与市场实践",
  },
  proofTitle: {
    en: "Market Research · Customer Insight · Product Strategy · Stakeholder Coordination · GTM Execution",
    zh: "市场研究 · 用户洞察 · 产品策略 · 多方协调 · GTM执行",
  },
  transitions: {
    en: [],
    zh: [],
  },
} as const;

export const homeJourneyContent = {
  title: { en: "How Transitions Shaped My Capabilities", zh: "转变如何塑造能力" },
  eyebrow: { en: "Capability Journey", zh: "能力形成路径" },
  intro: {
    en: [
      "Building, testing and transferring capabilities through real challenges.",
    ],
    zh: [
      "在不同环境与真实问题中，持续学习、验证并迁移能力。",
    ],
  },  labels: {
    readMore: { en: "Read More", zh: "查看详情" },
    close: { en: "Close", zh: "收起详情" },
    selected: { en: "Selected Change", zh: "当前转变" },
    why: { en: "Why I Changed", zh: "为什么改变" },
    observed: { en: "Change I Observed", zh: "我观察到的变化" },
    decision: { en: "Decision I Made", zh: "我做出的决定" },
    built: { en: "Capabilities Built", zh: "获得的能力" },
  },
  chapters: [
    {
      title: { en: "From Engineering to Business", zh: "从工科转向商业" },
      summary: {
        en: "A real business sponsorship experience helped me identify where my strengths truly were.",
        zh: "一次真实商务实践让我开始确认自己真正擅长的是理解需求、连接资源并创造商业价值。",
      },
      tags: {
        en: ["Opportunity Recognition", "Learning Agility", "Business Communication", "International Perspective"],
        zh: ["机会识别", "快速学习", "商务沟通", "国际视野"],
      },
    },
    {
      title: { en: "From Campus to Government", zh: "从校园走向政府" },
      summary: {
        en: "I entered a complex public-sector environment to learn how ideas become real outcomes through coordination and execution.",
        zh: "我进入真实复杂的公共部门环境，学习如何通过协调资源和持续执行把想法转化为结果。",
      },
      tags: {
        en: ["Stakeholder Management", "Strategic Communication", "Complex Execution", "Resource Coordination", "Business Development"],
        zh: ["利益相关者管理", "战略沟通", "复杂项目执行", "资源协调", "商务拓展"],
      },
    },
    {
      title: { en: "From Government Projects to a Personal Business Loop", zh: "从政府项目到个人商业闭环" },
      summary: {
        en: "I moved from government-business coordination and enterprise services to building a personal online civil service exam education studio from scratch. Through Xiaohongshu content acquisition, WeChat private-domain engagement, trial-session conversion, and long-term service delivery, I converted 500+ paid users and built a complete loop from acquisition to conversion, delivery, and referral growth.",
        zh: "从政企协调和企业服务，转向从0搭建个人线上考公教育工作室。我通过小红书内容获客、微信私域承接和试听体验转化，完成500+付费用户转化，并建立获客、转化、交付和转介绍的完整业务闭环。",
      },
      tags: {
        en: ["Zero-to-One Validation", "Customer Insight", "Content-Led Growth", "Service Design", "Referral Growth"],
        zh: ["从0到1验证", "客户洞察", "内容驱动增长", "服务设计", "转介绍增长"],
      },
    },
    {
      title: { en: "From China to Global Markets", zh: "从中国市场走向全球市场" },
      summary: {
        en: "Entering unfamiliar markets pushed me to compare platforms, customers, suppliers, and local constraints.",
        zh: "进入陌生市场让我开始比较平台、客户、供应链和本地约束，建立可迁移的市场判断能力。",
      },
      tags: {
        en: ["Global Market Analysis", "International Market Entry", "Cross-Border Operations", "Supplier Management", "Market Adaptability"],
        zh: ["全球市场分析", "国际市场进入", "跨境业务运营", "供应商管理", "市场适应能力"],
      },
    },
    {
      title: { en: "From Global Business to a Technology-Driven Future", zh: "从全球商业走向技术驱动的未来" },
      summary: {
        en: "AI and new workflows changed how I think about strategy, execution, and organizational capability.",
        zh: "AI和新工作流改变了我对战略、执行和组织能力的理解，也推动我面向未来持续学习。",
      },
      tags: {
        en: ["AI for Business", "Systems Thinking", "Strategic Foresight", "Workflow Design", "Innovation Mindset"],
        zh: ["AI商业应用", "系统思维", "战略前瞻", "工作流设计", "创新思维"],
      },
    },
  ],
} as const;

export const homeCasesContent = {
  eyebrow: { en: "Turning Capabilities into Value", zh: "让能力创造价值" },
  title: { en: "Turning Capabilities into Value", zh: "让能力创造价值" },
  subtitle: {
    en: "Applying capabilities to real business challenges to create growth, opportunities and tangible outcomes.",
    zh: "将能力应用于真实商业问题，转化为增长、机会与项目成果。",
  },
  labels: {
    choose: { en: "Choose a case", zh: "选择案例" },
    challenge: { en: "Business Problem", zh: "商业问题" },
    evidence: { en: "Value Created", zh: "创造的价值" },
    path: { en: "Value Creation Path", zh: "价值创造路径" },
    view: { en: "View Case Study", zh: "查看案例详情" },
  },
  items: [
    {
      id: "kaoba167",
      title: {
        en: "Kaoba 167: Differentiated Product and Pricing Strategy Based on Market Gaps",
        zh: "考吧167：基于市场空档的差异化产品与定价策略",
      },
      image: "/images/cases/government-business.png",
      challenge: {
        en: "How can a niche online education project compete in a market dominated by major civil-service exam training providers?",
        zh: "一个个人线上考公教育项目，如何在大型培训机构占据主要认知的市场中找到差异化机会？",
      },
      results: {
        en: ["Identified gaps between recorded, unauthorized and offline course options", "Designed RMB 137 and RMB 3,500 differentiated products", "Attracted around 2,000 private-domain leads", "Converted approximately 500 paying users"],
        zh: ["识别录播课、非正版资源与线下课之间的市场空档", "设计137元与约3,500元两类差异化产品", "引流约2,000名用户至私域", "累计转化约500名付费用户"],
      },
      path: {
        en: ["Competitor Analysis", "Market Gaps", "Product Design", "Content Acquisition", "Private-Domain Conversion"],
        zh: ["竞品分析", "市场空档", "产品设计", "内容获客", "私域转化"],
      },
      statement: {
        en: "After analyzing the course formats and pricing structures of major civil-service exam training providers, I identified market gaps between standard recorded courses, low-cost unauthorized resources and high-priced offline programs. I designed a RMB 137 one-week recorded course with personalized feedback and an approximately RMB 3,500 ten-day online one-to-one intensive program. Through differentiated content strategies across Xiaohongshu, Douyin and Bilibili, the project attracted around 2,000 private-domain leads and converted approximately 500 paying users.",
        zh: "分析大型考公机构的课程与价格体系后，识别标准录播课、低价非正版资源与高价线下课程之间的市场空档，设计137元的一周录播加个人批改产品，以及约3,500元的十天线上一对一冲刺课程；通过小红书、抖音和B站差异化内容引流约2,000名用户至私域，累计转化约500名付费用户。",
      },
    },
    {
      id: "uae-market-entry",
      title: {
        en: "Middle East Cross-Border E-commerce GTM Strategy & Execution",
        zh: "中东跨境电商GTM策略与落地",
      },
      image: "/images/cases/uae-market-entry.png",
      challenge: {
        en: "How can a small team use regional insight, China-based supply chain capabilities and low-risk fulfillment to validate product opportunities in the Middle East market?",
        zh: "一个资源有限的小团队，如何结合区域市场洞察、中国供应链与低风险履约方式，在中东市场验证产品机会？",
      },
      results: {
        en: ["Middle East and UAE market research", "Amazon UAE and Noon platform analysis", "Beauty tools, culturally relevant lightweight accessories and compact household products selected", "Dropshipping and small-batch sourcing used for validation", "Localized inventory and fulfillment capabilities gradually developed", "International channel performance grew by over 30% within six months", "Selected products exceeded 100 units in monthly sales"],
        zh: ["完成中东与阿联酋市场研究", "分析Amazon UAE与Noon平台需求、价格和用户评价", "筛选美妆工具、中东文化审美元素饰品及轻量小家居产品", "通过一件代发与小批量采购验证需求", "逐步建立本地备货和物流履约能力", "六个月内推动国际渠道增长30%以上", "部分热销单品月销量超过100件"],
      },
      path: {
        en: ["Market Signals", "Platform Research", "Product Screening", "Dropshipping Validation", "Localized Fulfillment"],
        zh: ["市场信号", "平台研究", "产品筛选", "一件代发验证", "本地履约升级"],
      },
      statement: {
        en: "Based on research into Middle East e-commerce growth, the UAE market environment and China-based supply chain capabilities in 2022, I analyzed product demand, pricing and customer reviews across Amazon UAE and Noon. I selected beauty tools, lightweight accessories with Middle Eastern cultural and aesthetic relevance, and compact household products, validated demand through dropshipping, and gradually developed localized inventory and fulfillment capabilities. International channel performance grew by over 30% within six months, with selected products exceeding 100 units in monthly sales.",
        zh: "基于2022年中东电商增长、阿联酋市场环境和中国供应链研究，分析Amazon与Noon的热销品类、价格和用户评价，筛选美妆工具、中东文化审美元素饰品及轻量小家居产品；通过一件代发验证需求，并逐步建立本地备货和物流履约能力，六个月内推动国际渠道增长30%以上，部分热销单品月销量超过100件。",
      },
    },    {
      "id": "government-business",
      "title": {
        "en": "XinYin 1950 Urban Renewal & Commercial Revitalization",
        "zh": "新印1950城市更新与商业活化项目"
      },
      "image": "/images/cases/kaoba167.png",
      "challenge": {
        "en": "How can an underused industrial site in an old urban district be repositioned into a differentiated commercial and cultural consumption scene?",
        "zh": "老城区旧工业空间如何重新定位为具有差异化的商业与文化消费场景？"
      },
      "results": {
        "en": [
          "Market research for the former Xinhua Printing Factory site",
          "Government, Guomao Group, Snow Beer, media and merchant coordination",
          "Spring Festival Snow Beer Cultural Market proposal",
          "Support for XinYin 1950 urban renewal project advancement"
        ],
        "zh": [
          "新华印刷厂旧厂区市场调研",
          "政府、国贸集团、雪花啤酒、媒体及商户协调",
          "春节雪花啤酒文化集市方案",
          "支持新印1950城市更新项目推进"
        ]
      },
      "path": {
        "en": [
          "Industrial Site Potential",
          "Market Research",
          "Stakeholder Coordination",
          "Brand Activation",
          "Consumer-Scene Validation"
        ],
        "zh": [
          "工业空间机会",
          "市场调研",
          "多方协调",
          "品牌活动",
          "消费场景验证"
        ]
      },
      "statement": {
        "en": "Led market research for the former Xinhua Printing Factory site and coordinated government departments, Guomao Group, Snow Beer, local media and merchants. Used brand activation, heritage-brand storytelling and consumer-scene validation to support the development of the XinYin 1950 urban renewal project, with over RMB 200 million in project investment.",
        "zh": "主导新华印刷厂旧厂区市场调研，协调政府、国贸集团、雪花啤酒、媒体及本地商户资源，通过品牌活动、老字号传播与消费场景验证，支持投资规模超2亿元的新印1950城市更新项目推进。"
      }
    },
  ],
} as const;

export const nextChangeContent = {
  eyebrow: { en: "The Next Change", zh: "下一场变化" },
  title: { en: "The Next Change", zh: "下一场变化" },
  subtitle: {
    en: "What changes now—and how I want to create value next.",
    zh: "当市场、全球化与技术再次发生变化，我希望把过去建立的能力带入更复杂、更长期的商业挑战。",
  },
  parts: [
    {
      number: "01",
      title: { en: "What Is Changing", zh: "世界正在发生什么变化" },
      body: {
        en: [
          "The changes I experienced in the past were often connected to my own career path, individual businesses, and specific markets.",
          "Today, I see deeper structural changes happening simultaneously.",
          "Chinese companies are moving from relying primarily on supply-chain efficiency, cost advantages, and marketplace traffic toward competing in global markets.",
          "Entering a market is no longer the most difficult challenge.",
          "Understanding different customers, building localization capabilities, earning brand trust, developing long-term channels, and creating strong partner relationships are becoming increasingly important.",
          "At the same time, AI is reducing the cost of information access, market research, content production, and business experimentation.",
          "But as technological capabilities become more accessible, the capabilities that remain scarce are also changing.",
          "Future competitive advantage will not come simply from having more tools.",
          "It will come from understanding change faster, asking better questions, integrating market and technological information, and turning new possibilities into business systems that organizations can execute and improve over time.",
        ],
        zh: [
          "过去，我经历的变化更多发生在个人职业路径和具体市场中。",
          "现在，我关注到更深层的商业变化正在同时发生。",
          "中国企业正在从依赖供应链效率、成本优势和平台流量，走向全球市场竞争。",
          "进入一个市场已经不再是最困难的问题。",
          "如何理解不同消费者、建立本地化能力、形成品牌信任、建设长期渠道和合作伙伴关系，正在成为更加重要的挑战。",
          "与此同时，AI正在降低信息获取、市场研究、内容生产和业务实验的成本。",
          "但技术能力越来越容易获得，也意味着真正稀缺的能力正在发生变化。",
          "未来的竞争优势，不只是拥有更多工具，而是能否更快理解变化、提出正确的问题、整合市场与技术信息，并把新的可能性转化为组织可以持续执行的商业系统。",
        ],
      },
    },
    {
      number: "02",
      title: { en: "What I Have Built", zh: "过去的变化让我建立了什么" },
      intro: {
        en: [
          "My experiences have not made me a specialist in only one function.",
          "They have helped me build a combination of transferable capabilities that can create value across changing environments.",
        ],
        zh: [
          "过去的经历并没有让我只成为某一个单一职能的专家。",
          "它让我逐渐建立了一组能够跨环境迁移、并在变化中持续创造价值的能力组合。",
        ],
      },
      modules: [
        {
          title: { en: "Opportunity Recognition", zh: "机会识别" },
          description: {
            en: "Identifying problems and opportunities worth exploring from changes in markets, customers, technology, and business environments.",
            zh: "从市场、用户、技术和商业环境的变化中，识别值得进一步研究和验证的问题与机会。",
          },
        },
        {
          title: { en: "Customer & Market Understanding", zh: "客户与市场理解" },
          description: {
            en: "Understanding real demand through market research, direct customer interaction, platform information, and business feedback.",
            zh: "通过市场研究、直接用户互动、平台信息和商业反馈理解真实需求。",
          },
        },
        {
          title: { en: "Zero-to-One Validation", zh: "从0到1验证" },
          description: {
            en: "Testing market demand, product opportunities, and business models through practical experimentation under limited resources and incomplete information.",
            zh: "在资源有限和信息不完整的情况下，通过实际实验验证市场需求、产品机会和商业模式。",
          },
        },
        {
          title: { en: "Business Development & Stakeholder Alignment", zh: "商务拓展与利益相关者协同" },
          description: {
            en: "Understanding different objectives, constraints, and interests, then building cooperation and maintaining progress toward execution.",
            zh: "理解不同参与者的目标、约束和利益，建立合作关系，并持续推动项目执行。",
          },
        },
        {
          title: { en: "Global Market Adaptability", zh: "全球市场适应能力" },
          description: {
            en: "Entering unfamiliar markets, identifying what can transfer across environments, and redesigning execution around local customers and market conditions.",
            zh: "进入陌生市场，判断哪些能力可以迁移，并根据本地客户和市场条件重新设计执行方式。",
          },
        },
        {
          title: { en: "AI-Enabled Learning & Execution", zh: "AI赋能的学习与执行" },
          description: {
            en: "Using AI to improve research, analysis, workflow design, and experimentation while keeping business problems and value creation at the center.",
            zh: "利用AI提升研究、分析、工作流设计和业务实验效率，同时始终以商业问题和价值创造为核心。",
          },
        },
      ],
    },
    {
      number: "03",
      title: { en: "Where I Want to Create Value", zh: "下一阶段，我希望在哪里创造价值" },
      body: {
        en: [
          "In my next stage, I want to work in more complex, international, and long-term-oriented business environments.",
          "I want to contribute beyond individual transactions, short-term growth projects, or the validation of opportunities in a single market.",
          "I want to help solve questions such as:",
          "How can organizations identify new global market opportunities?",
          "How can businesses understand customers across different markets?",
          "How should market-entry strategies be designed, tested, and improved?",
          "How can companies build long-term relationships across brands, channels, customers, and partners?",
          "How can AI be meaningfully applied to market research, business decisions, and organizational workflows?",
          "How can market and technological change be translated into competitive capabilities that organizations can continue to build over time?",
          "Therefore, the intersection where I want to continue creating value is:",
          "Global Growth × Business Development × GTM × Localization × AI-Enabled Business",
        ],
        zh: [
          "下一阶段，我希望进入更加复杂、国际化和长期导向的商业环境。",
          "我希望参与的不只是一次交易、一个短期增长项目，或者单一市场的机会验证。",
          "我更希望参与解决这些问题：",
          "如何识别新的全球市场机会？",
          "如何理解不同市场中的消费者与客户？",
          "如何设计并验证市场进入策略？",
          "如何建立品牌、渠道、客户与合作伙伴之间的长期关系？",
          "如何将AI真正应用于市场研究、业务决策和组织工作流？",
          "如何把市场变化和技术变化转化为企业可以持续建立的竞争能力？",
          "因此，我下一阶段希望在以下交叉区域持续创造价值：",
          "全球增长 × 商务拓展 × 市场进入 × 本地化 × AI赋能商业",
        ],
      },
    },
  ],
  conclusion: {
    en: [],
    zh: [],
  },} as const;

export const finalCtaContent = {
  headline: {
    en: "If your team is entering new markets, exploring new growth opportunities, or turning technological and business change into long-term value, I’d be glad to connect and explore what we could build together.",
    zh: "如果你的团队正在进入新的市场、寻找新的增长机会，或探索如何将技术与商业变化转化为长期价值，我期待与你交流，看看我们能共同创造什么。",
  },  button: {
    en: "Let’s Connect →",
    zh: "与我联系 →",
  },
  href: "mailto:jiyuewang9@163.com",
} as const;

export const contactCtaContent = {
  headline: {
    en: "If you are entering a new market, looking for new growth opportunities, or exploring how technological and business change can be translated into long-term value, I would be glad to connect and explore what new possibilities we could create together.",
    zh: "如果你正在进入新市场、寻找增长机会，或探索如何将技术与商业变化转化为长期价值，欢迎与我交流，一起看看我们可以创造哪些新的可能。",
  },  button: {
    en: "Contact Me →",
    zh: "与我联系 →",
  },
  href: "mailto:jiyuewang9@163.com",
  email: "jiyuewang9@163.com",
} as const;

export const homeNavContent = {
  brand: "WANG JIYUE",
  links: [
    { label: { en: "Journey", zh: "经历" }, href: "/#journey" },
    { label: { en: "Cases", zh: "案例" }, href: "/#cases" },
    { label: { en: "The Next Change", zh: "下一场变化" }, href: "/#next-change" },
    { label: { en: "Contact", zh: "联系" }, href: "/#contact" },
  ],
  resume: { en: "Resume", zh: "简历" },
} as const;

export const homeSections = [
  { id: "hero", label: { en: "Hero", zh: "首页" }, href: "/#hero" },
  { id: "journey", label: { en: "Journey", zh: "经历" }, href: "/#journey" },
  { id: "cases", label: { en: "Cases", zh: "案例" }, href: "/#cases" },
  { id: "next-change", label: { en: "Next Change", zh: "下一场变化" }, href: "/#next-change" },
  { id: "contact", label: { en: "Contact", zh: "联系" }, href: "/#contact" },
] as const;

export const homeJourneyDetailsContent = [
  {
    why: {
      en: ["I started in engineering, but a real sponsorship project showed me that my strongest energy came from understanding needs, communicating value, and connecting resources."],
      zh: ["我最初学习工科，但一次真实赞助项目让我意识到，自己更擅长理解需求、沟通价值和连接资源。"],
    },
    observed: {
      en: ["Real business practice gave me clearer evidence than a predefined path. I saw that value is created when needs, resources, and action can be connected."],
      zh: ["真实商业实践比预设路径更能证明一个人的优势。我看到，价值来自于把需求、资源和行动真正连接起来。"],
    },
    decision: {
      en: ["I transferred into Marketing, rebuilt my academic foundation, and later studied in France to broaden my business perspective."],
      zh: ["我转入市场营销专业，重新建立商业知识基础，并前往法国学习，拓展自己的国际商业视野。"],
    },
    built: [
      { title: { en: "Opportunity Recognition", zh: "机会识别" }, text: { en: "Learning to identify direction through real-world evidence.", zh: "通过真实实践识别方向和机会。" } },
      { title: { en: "Business Communication", zh: "商务沟通" }, text: { en: "Learning to create cooperation through value exchange.", zh: "通过价值沟通和资源连接推动合作。" } },
    ],
  },
  {
    why: {
      en: ["After studying business, I wanted to understand how ideas become outcomes inside complex organizations with multiple stakeholders."],
      zh: ["学习商业之后，我希望理解想法如何在复杂组织和多方利益环境中真正变成结果。"],
    },
    observed: {
      en: ["Good strategies do not create value automatically. Execution depends on aligning people, interests, resources, timing, and constraints."],
      zh: ["好的策略不会自动创造价值。真正的执行取决于人、利益、资源、时机和约束条件的协同。"],
    },
    decision: {
      en: ["I entered government-related work to learn stakeholder coordination, public-private communication, and complex project execution."],
      zh: ["我进入政府相关工作，学习利益相关者协调、政企沟通和复杂项目推进。"],
    },
    built: [
      { title: { en: "Stakeholder Management", zh: "利益相关者管理" }, text: { en: "Understanding different objectives and building alignment.", zh: "理解不同目标，并建立合作共识。" } },
      { title: { en: "Complex Execution", zh: "复杂项目执行" }, text: { en: "Moving work forward when outcomes depend on multiple organizations.", zh: "在多组织参与的环境中持续推动项目进展。" } },
    ],
  },
  {
    why: {
      en: ["I wanted to move from supporting projects to directly testing whether market insight could become customers, revenue, and repeatable growth."],
      zh: ["我希望从支持项目，走向直接验证市场洞察能否转化为客户、收入和可重复增长。"],
    },
    observed: {
      en: ["Small businesses cannot rely only on budgets or brand awareness. They need sharper customer understanding and more efficient growth systems."],
      zh: ["小规模业务不能只依赖预算或品牌知名度，更需要精准客户理解和高效率增长系统。"],
    },
    decision: {
      en: ["I built Kaoba 167 from zero and tested a content-to-community-to-payment-to-referral business system."],
      zh: ["我从0建立考吧167，并验证“内容—私域—付费—服务—转介绍”的业务系统。"],
    },
    built: [
      { title: { en: "Zero-to-One Validation", zh: "从0到1验证" }, text: { en: "Testing demand and business models under limited resources.", zh: "在有限资源下验证需求和商业模式。" } },
      { title: { en: "Growth System Design", zh: "增长系统设计" }, text: { en: "Connecting acquisition, conversion, service, and referrals.", zh: "连接获客、转化、服务和转介绍。" } },
    ],
  },
  {
    why: {
      en: ["After building in China, I wanted to test whether my market judgment and execution methods could transfer into unfamiliar international markets."],
      zh: ["在中国市场实践之后，我希望验证自己的市场判断和执行方法能否迁移到陌生国际市场。"],
    },
    observed: {
      en: ["Different markets require different customer assumptions, platform signals, supplier decisions, and operating constraints."],
      zh: ["不同市场意味着不同客户假设、平台信号、供应链选择和运营约束。"],
    },
    decision: {
      en: ["I explored the UAE e-commerce market through platform research, product screening, supplier development, and controlled experiments."],
      zh: ["我通过平台研究、产品筛选、供应商开发和低风险实验探索UAE电商市场。"],
    },
    built: [
      { title: { en: "Global Market Adaptability", zh: "全球市场适应能力" }, text: { en: "Entering unfamiliar markets and adapting execution to local conditions.", zh: "进入陌生市场，并根据本地条件调整执行方式。" } },
      { title: { en: "Cross-Border Operations", zh: "跨境业务运营" }, text: { en: "Connecting product selection, sourcing, logistics, and feedback.", zh: "连接选品、采购、物流和市场反馈。" } },
    ],
  },
  {
    why: {
      en: ["Global business practice made me pay closer attention to how AI and new workflows are changing research, execution, and organizational capability."],
      zh: ["全球商业实践让我更加关注AI和新工作流如何改变研究、执行和组织能力。"],
    },
    observed: {
      en: ["AI lowers the cost of information and experimentation, but the scarce capability is still asking better questions and turning possibilities into systems."],
      zh: ["AI降低了信息获取和实验成本，但真正稀缺的仍是提出好问题，并把可能性转化为系统的能力。"],
    },
    decision: {
      en: ["I began building AI-enabled workflows for research, analysis, business experimentation, and strategy execution."],
      zh: ["我开始建立AI赋能的研究、分析、业务实验和战略执行工作流。"],
    },
    built: [
      { title: { en: "AI-Enabled Learning", zh: "AI赋能学习" }, text: { en: "Using AI to accelerate research, analysis, and iteration.", zh: "利用AI提升研究、分析和迭代效率。" } },
      { title: { en: "Systems Thinking", zh: "系统思维" }, text: { en: "Designing workflows that connect insight, action, and feedback.", zh: "设计连接洞察、行动和反馈的工作流。" } },
    ],
  },
] as const;
