document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');
    const checkIcons = document.querySelectorAll('.fa-check-circle');

    // 初始化天文和大自然动效
    initializeNatureEffects();

    // 活动内容库 - 扩展为5-18岁不同年龄段
    const activities = {
        learning: {
            '识字游戏': {
                tasks: [
                    '早上阅读时间，使用字母卡片进行配对游戏。',
                    '每天学习5个新字，并用这些字造简单的句子。',
                    '通过绘画和书写相结合的方式记忆字形。'
                ],
                ageRange: [5, 7] // 适合5-7岁
            },
            '数字游戏': {
                tasks: [
                    '上午时段使用积木或贴纸进行简单的加减法练习。',
                    '玩数字拼图游戏，帮助理解数字顺序和大小关系。',
                    '在日常生活中实践数数，如数台阶、数水果等。'
                ],
                ageRange: [5, 7]
            },
            '绘画与手工': {
                tasks: [
                    '下午创作时间，每周选择一个主题进行绘画创作。',
                    '利用回收材料制作环保手工艺品，培养环保意识。',
                    '学习使用剪刀、胶水等工具进行安全创作。'
                ],
                ageRange: [5, 10]
            },
            '阅读启蒙': {
                tasks: [
                    '在上午阅读角每天阅读绘本20分钟，培养阅读兴趣。',
                    '下午朗读简单的儿童故事，提高语言表达能力。',
                    '睡前进行亲子共读，享受阅读的乐趣。'
                ],
                ageRange: [5, 8]
            },
            '基础英语': {
                tasks: [
                    '学习日常英语单词和简单表达。',
                    '通过英文儿歌和动画学习英语。',
                    '玩英语单词卡片记忆游戏。'
                ],
                ageRange: [6, 10]
            },
            '小学数学': {
                tasks: [
                    '练习基础四则运算。',
                    '解决生活中的简单数学问题。',
                    '学习几何图形和基本测量。'
                ],
                ageRange: [7, 12]
            },
            '科学实验': {
                tasks: [
                    '进行简单的科学实验，如种植豆芽观察生长。',
                    '制作火山模型或水循环模型。',
                    '学习基本的物理现象，如浮力、磁力等。'
                ],
                ageRange: [8, 13]
            },
            '编程入门': {
                tasks: [
                    '使用图形化编程工具（如Scratch）创建简单游戏。',
                    '学习基本的编程概念如循环和条件判断。',
                    '设计简单的互动故事或动画。'
                ],
                ageRange: [9, 14]
            },
            '写作练习': {
                tasks: [
                    '写日记记录每日感受和事件。',
                    '创作短篇故事或诗歌。',
                    '练习各种文体的写作，如说明文、议论文等。'
                ],
                ageRange: [10, 16]
            },
            '高级数学': {
                tasks: [
                    '学习代数和几何概念。',
                    '解决数学竞赛题目，培养逻辑思维。',
                    '应用数学知识解决实际问题。'
                ],
                ageRange: [12, 18]
            },
            '外语深入': {
                tasks: [
                    '阅读原版外语书籍。',
                    '观看外语影视作品并做笔记。',
                    '与外语伙伴进行口语练习。'
                ],
                ageRange: [13, 18]
            },
            '研究项目': {
                tasks: [
                    '选择一个感兴趣的主题进行深入研究。',
                    '撰写研究报告或论文。',
                    '准备演示文稿分享研究成果。'
                ],
                ageRange: [14, 18]
            },
            '音乐学习': {
                tasks: [
                    '每天练习15-30分钟的乐器，培养音乐感和节奏感。',
                    '学习简单的音乐理论和乐谱阅读。',
                    '参与小型音乐表演，增强自信心。'
                ],
                ageRange: [6, 18]
            },
            '自然探索': {
                tasks: [
                    '在户外记录观察植物生长或昆虫活动。',
                    '收集树叶、石头等自然物品，制作自然收藏簿。',
                    '了解生态系统和环境保护的基本知识。'
                ],
                ageRange: [5, 16]
            },
            '创意思维': {
                tasks: [
                    '进行头脑风暴，想出解决日常问题的多种方法。',
                    '尝试从不同角度看待同一问题，培养发散思维。',
                    '创造性地使用家中物品，发挥想象力。'
                ],
                ageRange: [7, 18]
            }
        },
        living: {
            '整理房间': {
                tasks: [
                    '每天早上整理床铺。',
                    '将玩具分类并放回指定位置。',
                    '学习如何折叠简单的衣物。'
                ],
                ageRange: [5, 9]
            },
            '简单的家务': {
                tasks: [
                    '帮助擦桌子和椅子。',
                    '学习如何浇花和照顾植物。',
                    '每周帮助清理一次自己的小书架。'
                ],
                ageRange: [5, 10]
            },
            '故事时间': {
                tasks: [
                    '每天晚上听一个故事，并复述故事情节。',
                    '选择一本图画书，描述书中的图片。',
                    '创作一个简单的故事，并画出故事情节。'
                ],
                ageRange: [5, 8]
            },
            '个人卫生': {
                tasks: [
                    '早上起床后刷牙、洗脸，保持精神焕发。',
                    '学习正确的洗手方法和时机，尤其是饭前便后。',
                    '睡前刷牙和洗脸，培养良好的入睡习惯。',
                    '保持指甲清洁，定期修剪。'
                ],
                ageRange: [5, 10]
            },
            '基础烹饪': {
                tasks: [
                    '学习制作简单的三明治或水果沙拉。',
                    '在大人帮助下使用厨房工具。',
                    '认识基本食材和营养知识。'
                ],
                ageRange: [8, 12]
            },
            '时间管理': {
                tasks: [
                    '制定每日计划表并遵守。',
                    '学习使用闹钟和日历。',
                    '合理安排学习和休息时间。'
                ],
                ageRange: [9, 15]
            },
            '社交礼仪': {
                tasks: [
                    '练习与人交流的基本礼仪。',
                    '学习倾听和表达技巧。',
                    '理解和尊重个人空间与边界。'
                ],
                ageRange: [10, 16]
            },
            '家庭厨艺': {
                tasks: [
                    '学习制作家庭简单菜肴。',
                    '了解食品安全和卫生知识。',
                    '设计均衡的膳食计划。'
                ],
                ageRange: [12, 18]
            },
            '财务管理': {
                tasks: [
                    '学习基本的储蓄和消费概念。',
                    '记录个人收支，制定小预算。',
                    '了解基本的投资和理财知识。'
                ],
                ageRange: [13, 18]
            },
            '生活规划': {
                tasks: [
                    '设定短期和长期个人目标。',
                    '学习制定详细的行动计划。',
                    '定期反思和调整目标。'
                ],
                ageRange: [14, 18]
            },
            '职业探索': {
                tasks: [
                    '了解不同职业的特点和要求。',
                    '参加职业体验活动或实习。',
                    '评估个人兴趣与职业匹配度。'
                ],
                ageRange: [15, 18]
            },
            '情绪管理': {
                tasks: [
                    '学习识别和表达自己的情绪。',
                    '掌握简单的情绪调节技巧，如深呼吸和数数。',
                    '理解他人情绪，培养同理心。'
                ],
                ageRange: [5, 16]
            },
            '健康饮食': {
                tasks: [
                    '认识食物分类和营养素。',
                    '学习选择健康零食，减少高糖食品摄入。',
                    '帮助准备家庭餐食，体验食物制作过程。'
                ],
                ageRange: [5, 18]
            }
        },
        exercise: {
            '户外活动': {
                tasks: [
                    '每天在公园里跑步或散步30分钟。',
                    '学习骑自行车或滑板车。',
                    '玩简单的球类游戏，如踢足球或投篮。'
                ],
                ageRange: [5, 12]
            },
            '室内运动': {
                tasks: [
                    '跟随儿童瑜伽视频进行练习。',
                    '跳舞游戏，跟随音乐自由舞动。',
                    '简单的体操练习，如翻滚和跳跃。'
                ],
                ageRange: [5, 10]
            },
            '亲子运动': {
                tasks: [
                    '和家人一起进行简单的拉力赛。',
                    '进行亲子瑜伽或拉伸练习。',
                    '玩"捉迷藏"或"红灯绿灯"等游戏。'
                ],
                ageRange: [5, 9]
            },
            '基础体能': {
                tasks: [
                    '进行基础的跑、跳、投掷练习。',
                    '练习简单的力量训练，如俯卧撑和仰卧起坐。',
                    '进行平衡和协调性训练。'
                ],
                ageRange: [7, 12]
            },
            '游泳技能': {
                tasks: [
                    '学习基本的游泳姿势和技巧。',
                    '进行水中安全知识学习。',
                    '参加趣味游泳活动和比赛。'
                ],
                ageRange: [6, 14]
            },
            '团队运动': {
                tasks: [
                    '参与小组接力赛或团队挑战。',
                    '学习团队合作和沟通的重要性。',
                    '体验不同角色的责任，培养团队意识。'
                ],
                ageRange: [7, 18]
            },
            '专项训练': {
                tasks: [
                    '选择一项感兴趣的运动进行深入练习。',
                    '学习该运动的进阶技巧和策略。',
                    '参加相关的比赛或表演。'
                ],
                ageRange: [10, 18]
            },
            '有氧训练': {
                tasks: [
                    '进行中长跑、骑行等有氧训练。',
                    '参加跑步俱乐部或骑行活动。',
                    '学习控制呼吸和体力分配。'
                ],
                ageRange: [12, 18]
            },
            '力量训练': {
                tasks: [
                    '学习正确的力量训练方法。',
                    '制定合理的力量训练计划。',
                    '注意训练安全和恢复。'
                ],
                ageRange: [14, 18]
            },
            '运动营养': {
                tasks: [
                    '了解运动前后的营养需求。',
                    '制定适合运动的饮食计划。',
                    '学习补水和能量补充知识。'
                ],
                ageRange: [13, 18]
            },
            '健康习惯': {
                tasks: [
                    '保持良好的坐姿和站姿，预防驼背。',
                    '学习正确用眼，每隔30分钟远眺休息。',
                    '养成饭后散步的习惯，促进消化。'
                ],
                ageRange: [5, 18]
            },
            '季节性活动': {
                tasks: [
                    '夏季学习游泳和水上安全知识。',
                    '冬季体验滑雪或冰上活动。',
                    '春秋季参与远足和露营活动，亲近自然。'
                ],
                ageRange: [6, 18]
            }
        }
    };

    // 当前选择的年龄
    let currentAge = 5; // 默认年龄为5岁

    // 时间表与活动类型的映射关系
    const scheduleActivityMap = {
        '07:00 - 07:30': { type: 'living', name: '晨间洗漱', dayPart: '早晨' },
        '07:30 - 08:00': { type: null, name: '早餐时间', dayPart: '早晨' },
        '08:00 - 09:30': { type: 'learning', name: '学习活动', dayPart: '上午' },
        '09:30 - 10:00': { type: null, name: '休息与点心', dayPart: '上午' },
        '10:00 - 11:30': { type: 'exercise', name: '户外活动', dayPart: '上午' },
        '11:30 - 12:30': { type: null, name: '午餐与休息', dayPart: '中午' },
        '12:30 - 14:00': { type: null, name: '午休时间', dayPart: '中午' },
        '14:00 - 15:30': { type: 'living', name: '生活技能活动', dayPart: '下午' },
        '15:30 - 16:00': { type: null, name: '休息与点心', dayPart: '下午' },
        '16:00 - 17:30': { type: 'exercise', name: '自由游戏时间', dayPart: '下午' },
        '17:30 - 18:30': { type: null, name: '晚餐时间', dayPart: '傍晚' },
        '18:30 - 19:00': { type: 'living', name: '家庭活动', dayPart: '晚上' },
        '19:00 - 19:30': { type: 'learning', name: '睡前阅读', dayPart: '晚上' },
        '19:30 - 20:00': { type: 'living', name: '晚间洗漱', dayPart: '晚上' },
        '20:00': { type: null, name: '就寝时间', dayPart: '晚上' }
    };

    // 播放完成音效的函数
    function playCompleteSound() {
        // 这里可以添加声音效果
    }

    // 为每个任务项添加点击事件
    listItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.parentElement.tagName === 'UL' && this.parentElement.parentElement.tagName === 'LI') {
                this.classList.toggle('completed');
                
                const checkIcon = this.querySelector('.fa-check-circle');
                if (checkIcon) {
                    checkIcon.style.animation = 'none';
                    checkIcon.offsetHeight;
                    checkIcon.style.animation = 'bounce 0.5s ease';
                    checkIcon.style.color = this.classList.contains('completed') ? '#4CAF50' : 'inherit';
                }

                playCompleteSound();
            }
            e.stopPropagation();
        });
    });

    // 添加鼠标悬停效果
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.fas:not(.fa-check-circle)');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.fas:not(.fa-check-circle)');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // 在页面加载时，创建年龄选择器
    createAgeSelector();

    // 创建换一换按钮
    const refreshButton = document.createElement('button');
    refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i><span>换一换</span>';
    refreshButton.className = 'refresh-button';
    document.querySelector('header').appendChild(refreshButton);

    // 添加初始时间表展示
    initializeSchedule();
    
    // 添加活动提醒板
    initializeActivityReminder();
    
    // 初始化天文和大自然动效
    initializeNatureEffects();
    
    // 创建年龄选择器
    function createAgeSelector() {
        const header = document.querySelector('header');
        
        // 创建年龄选择器容器
        const ageSelectorContainer = document.createElement('div');
        ageSelectorContainer.className = 'age-selector-container';
        
        // 创建标签
        const label = document.createElement('label');
        label.textContent = '选择年龄阶段';
        label.htmlFor = 'age-selector';
        ageSelectorContainer.appendChild(label);
        
        // 创建年龄分组
        const ageGroups = document.createElement('div');
        ageGroups.className = 'age-groups';
        
        // 添加分组标签
        const groups = [
            { text: '幼儿期', span: '5-7岁' },
            { text: '儿童期', span: '8-10岁' },
            { text: '少年期', span: '11-13岁' },
            { text: '青少年早期', span: '14-16岁' },
            { text: '青少年晚期', span: '17-18岁' }
        ];
        
        groups.forEach(group => {
            const groupElement = document.createElement('div');
            groupElement.className = 'age-group';
            groupElement.innerHTML = `${group.text}<br><small>${group.span}</small>`;
            ageGroups.appendChild(groupElement);
        });
        
        ageSelectorContainer.appendChild(ageGroups);
        
        // 创建年龄选择器
        const ageSelector = document.createElement('div');
        ageSelector.className = 'age-selector';
        
        // 创建年龄范围
        for (let age = 5; age <= 18; age++) {
            const ageOption = document.createElement('div');
            ageOption.className = 'age-option';
            ageOption.dataset.age = age;
            ageOption.textContent = age;
            
            // 设置默认选中
            if (age === currentAge) {
                ageOption.classList.add('selected');
            }
            
            // 添加点击事件
            ageOption.addEventListener('click', function() {
                // 移除之前的选中状态
                document.querySelectorAll('.age-option.selected').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // 添加新的选中状态
                this.classList.add('selected');
                
                // 更新当前年龄并刷新活动显示
                currentAge = parseInt(this.dataset.age);
                refreshActivitiesByAge();
            });
            
            ageSelector.appendChild(ageOption);
        }
        
        ageSelectorContainer.appendChild(ageSelector);
        
        // 创建描述文本
        const description = document.createElement('div');
        description.className = 'age-description';
        description.textContent = getAgeDescription(currentAge);
        description.id = 'age-description';
        ageSelectorContainer.appendChild(description);
        
        // 添加到页面
        header.after(ageSelectorContainer);
    }
    
    // 获取年龄阶段描述
    function getAgeDescription(age) {
        if (age >= 5 && age <= 7) {
            return '幼儿启蒙阶段：培养基本学习和生活习惯';
        } else if (age >= 8 && age <= 10) {
            return '小学低年级：发展基础能力和兴趣爱好';
        } else if (age >= 11 && age <= 13) {
            return '小学高年级/初中：培养自主学习和社交能力';
        } else if (age >= 14 && age <= 16) {
            return '初中/高中早期：发展专业技能和自我管理';
        } else if (age >= 17 && age <= 18) {
            return '高中晚期：为大学和未来职业做准备';
        }
        return '';
    }
    
    // 根据年龄刷新活动显示
    function refreshActivitiesByAge() {
        // 更新年龄描述
        const ageDescription = document.getElementById('age-description');
        if (ageDescription) {
            ageDescription.textContent = getAgeDescription(currentAge);
        }
        
        // 为每个类别刷新活动
        const categories = ['learning', 'living', 'exercise'];
        
        categories.forEach(category => {
            refreshCategoryActivities(category);
        });
        
        // 更新时间表
        updateSchedule();
    }
    
    // 刷新特定类别的活动
    function refreshCategoryActivities(category) {
        const container = document.querySelector(`#${category} > ul`);
        if (!container) return;
        
        // 清空当前活动
        container.innerHTML = '';
        
        // 获取适合当前年龄的活动
        const suitableActivities = getSuitableActivities(category, currentAge);
        
        // 如果没有合适的活动，显示提示
        if (suitableActivities.length === 0) {
            const noActivitiesMessage = document.createElement('li');
            noActivitiesMessage.textContent = `没有适合${currentAge}岁的${getCategoryName(category)}`;
            container.appendChild(noActivitiesMessage);
            return;
        }
        
        // 随机选择3个活动（如果可用活动少于3个，则全部显示）
        const activitiesToShow = suitableActivities.length <= 3 ? 
                                suitableActivities : 
                                shuffleArray(suitableActivities).slice(0, 3);
        
        // 创建并添加活动HTML
        activitiesToShow.forEach(activityName => {
            const activityHTML = createActivityHTML(category, activityName);
            
            // 创建临时元素解析HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = activityHTML;
            
            // 添加到容器
            container.appendChild(tempDiv.firstElementChild);
            
            // 为新添加的元素绑定事件
            const newElement = container.lastElementChild;
            bindEventsToActivity(newElement);
        });
    }
    
    // 获取适合指定年龄的活动
    function getSuitableActivities(category, age) {
        const result = [];
        
        for (const [activityName, activityData] of Object.entries(activities[category])) {
            const [minAge, maxAge] = activityData.ageRange;
            
            if (age >= minAge && age <= maxAge) {
                result.push(activityName);
            }
        }
        
        return result;
    }
    
    // 获取类别名称
    function getCategoryName(category) {
        switch(category) {
            case 'learning': return '学习活动';
            case 'living': return '生活活动';
            case 'exercise': return '运动活动';
            default: return '';
        }
    }
    
    // 随机打乱数组
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // 为活动元素绑定事件
    function bindEventsToActivity(element) {
        // 为子任务添加点击事件
        const subItems = element.querySelectorAll('ul > li');
        
        subItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (this.parentElement.tagName === 'UL' && this.parentElement.parentElement.tagName === 'LI') {
                    this.classList.toggle('completed');
                    
                    const checkIcon = this.querySelector('.fa-check-circle');
                    if (checkIcon) {
                        checkIcon.style.animation = 'none';
                        checkIcon.offsetHeight;
                        checkIcon.style.animation = 'bounce 0.5s ease';
                        checkIcon.style.color = this.classList.contains('completed') ? '#4CAF50' : 'inherit';
                    }
                    
                    playCompleteSound();
                }
                e.stopPropagation();
            });
        });
        
        // 添加鼠标悬停效果
        element.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.fas:not(.fa-check-circle)');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.fas:not(.fa-check-circle)');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    }

    // 获取随机活动 - 修改为考虑年龄
    function getRandomActivity(category, excludeCurrentActivities = true) {
        // 获取适合当前年龄的活动
        const suitableActivities = getSuitableActivities(category, currentAge);
        if (suitableActivities.length === 0) return null;
        
        // 获取当前显示的活动标题
        const currentActivities = [];
        if (excludeCurrentActivities) {
            const activityElements = document.querySelectorAll(`#${category} > ul > li`);
            activityElements.forEach(element => {
                const activityTitle = element.childNodes[1].textContent.trim();
                currentActivities.push(activityTitle);
            });
        }
        
        // 过滤掉当前已显示的活动
        const availableActivities = suitableActivities.filter(activity => !currentActivities.includes(activity));
        
        // 如果没有可用活动（全部都在显示中），则从所有活动中随机选择
        const selectFrom = availableActivities.length > 0 ? availableActivities : suitableActivities;
        
        // 随机选择一个活动
        const randomIndex = Math.floor(Math.random() * selectFrom.length);
        return selectFrom[randomIndex];
    }

    // 替换一个活动 - 修改为使用新的方法
    function replaceActivity(category) {
        const container = document.querySelector(`#${category} > ul`);
        const activityElements = container.querySelectorAll(':scope > li');
        
        if (activityElements.length > 0) {
            // 随机选择一个要替换的活动
            const randomIndex = Math.floor(Math.random() * activityElements.length);
            const elementToReplace = activityElements[randomIndex];
            
            // 获取一个新的随机活动
            const newActivity = getRandomActivity(category);
            
            // 如果没有找到合适的活动，返回失败
            if (!newActivity) return false;
            
            // 创建新的活动HTML
            const newActivityHTML = createActivityHTML(category, newActivity);
            
            // 创建临时元素来解析HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newActivityHTML;
            
            // 替换旧活动
            container.replaceChild(tempDiv.firstElementChild, elementToReplace);
            
            // 为新添加的元素绑定事件
            const newElement = container.children[randomIndex];
            bindEventsToActivity(newElement);
            
            return true;
        }
        
        return false;
    }

    // 修改为按钮添加点击事件，考虑年龄
    refreshButton.addEventListener('click', function() {
        // 旋转图标动画
        const icon = this.querySelector('i');
        icon.style.animationPlayState = 'running';
        
        // 替换每个类别中的一个活动
        const categories = ['learning', 'living', 'exercise'];
        let changed = false;
        
        categories.forEach(category => {
            if (replaceActivity(category)) {
                changed = true;
            }
        });
        
        if (changed) {
            // 更新时间表中的活动内容
            updateSchedule();
            
            // 显示成功信息
            const message = document.createElement('div');
            message.textContent = '活动已更新！';
            message.className = 'refresh-message';
            document.body.appendChild(message);
            
            // 3秒后移除消息
            setTimeout(() => {
                document.body.removeChild(message);
                icon.style.animationPlayState = 'paused';
            }, 3000);
        } else {
            alert('无法更新活动，请尝试选择其他年龄段！');
            icon.style.animationPlayState = 'paused';
        }
    });

    // 修改获取时间表详情函数，考虑年龄和时间段
    function getScheduleDetail(category, dayPart) {
        // 如果没有指定类别，返回一个默认消息
        if (!category) {
            if (dayPart === '早晨') {
                return '<span class="schedule-activity">准备开始一天的活动</span>';
            } else if (dayPart === '晚上') {
                return '<span class="schedule-activity">休息放松，准备就寝</span>';
            } else {
                return '<span class="schedule-activity">休息和自由活动时间</span>';
            }
        }

        // 取得当前年龄适合的活动
        const ageAppropriateActivities = Object.entries(activities[category]).filter(([_, info]) => {
            return currentAge >= info.ageRange[0] && currentAge <= info.ageRange[1];
        });

        // 如果没有适合当前年龄的活动，返回一个提示
        if (ageAppropriateActivities.length === 0) {
            return '<span class="schedule-activity">暂无适合当前年龄的活动</span>';
        }

        // 根据时间段筛选合适的活动类型
        let filteredActivities = ageAppropriateActivities;
        if (dayPart) {
            // 根据时间段筛选适合的活动
            if (dayPart === '早晨') {
                // 早晨适合的活动，如个人卫生、简单学习等
                filteredActivities = ageAppropriateActivities.filter(([name, _]) => 
                    ['个人卫生', '基础英语', '数字游戏', '识字游戏'].includes(name));
            } else if (dayPart === '上午') {
                // 上午适合的活动，如学习活动、户外活动等
                filteredActivities = ageAppropriateActivities.filter(([name, _]) => 
                    ['阅读启蒙', '识字游戏', '数字游戏', '小学数学', '科学实验', '自然探索'].includes(name));
            } else if (dayPart === '下午') {
                // 下午适合的活动，如手工、体育活动等
                filteredActivities = ageAppropriateActivities.filter(([name, _]) => 
                    ['绘画与手工', '创意思维', '音乐学习', '健康习惯', '室内运动'].includes(name));
            } else if (dayPart === '晚上') {
                // 晚上适合的活动，如阅读、个人卫生等
                filteredActivities = ageAppropriateActivities.filter(([name, _]) => 
                    ['个人卫生', '阅读启蒙', '故事时间', '基础英语'].includes(name));
            }
            
            // 如果筛选后没有活动，回退到所有适合年龄的活动
            if (filteredActivities.length === 0) {
                filteredActivities = ageAppropriateActivities;
            }
        }

        // 随机选择一个活动和任务
        const randomActivityIndex = Math.floor(Math.random() * filteredActivities.length);
        const [activityName, activityInfo] = filteredActivities[randomActivityIndex];
        const randomTaskIndex = Math.floor(Math.random() * activityInfo.tasks.length);
        const task = activityInfo.tasks[randomTaskIndex];

        // 组合返回的HTML
        return `<b>${activityName}</b>: 
                <span class="schedule-activity">${task}</span>`;
    }

    // 在加载时初始化显示适合当前年龄的活动
    refreshActivitiesByAge();

    // 创建活动项的HTML
    function createActivityHTML(category, activityName) {
        const tasks = activities[category][activityName].tasks;
        let iconClass;
        
        switch(activityName) {
            case '识字游戏':
                iconClass = 'fas fa-language';
                break;
            case '数字游戏':
                iconClass = 'fas fa-calculator';
                break;
            case '绘画与手工':
                iconClass = 'fas fa-paint-brush';
                break;
            case '阅读启蒙':
                iconClass = 'fas fa-book';
                break;
            case '基础英语':
                iconClass = 'fas fa-globe';
                break;
            case '小学数学':
                iconClass = 'fas fa-calculator';
                break;
            case '科学实验':
                iconClass = 'fas fa-flask';
                break;
            case '编程入门':
                iconClass = 'fas fa-code';
                break;
            case '写作练习':
                iconClass = 'fas fa-pen';
                break;
            case '高级数学':
                iconClass = 'fas fa-calculator';
                break;
            case '外语深入':
                iconClass = 'fas fa-language';
                break;
            case '研究项目':
                iconClass = 'fas fa-search';
                break;
            case '整理房间':
                iconClass = 'fas fa-bed';
                break;
            case '简单的家务':
                iconClass = 'fas fa-broom';
                break;
            case '故事时间':
                iconClass = 'fas fa-book';
                break;
            case '个人卫生':
                iconClass = 'fas fa-hand-sparkles';
                break;
            case '基础烹饪':
                iconClass = 'fas fa-utensils';
                break;
            case '时间管理':
                iconClass = 'fas fa-clock';
                break;
            case '社交礼仪':
                iconClass = 'fas fa-handshake';
                break;
            case '家庭厨艺':
                iconClass = 'fas fa-hamburger';
                break;
            case '财务管理':
                iconClass = 'fas fa-money-bill-wave';
                break;
            case '生活规划':
                iconClass = 'fas fa-map-marked-alt';
                break;
            case '职业探索':
                iconClass = 'fas fa-briefcase';
                break;
            case '户外活动':
                iconClass = 'fas fa-sun';
                break;
            case '室内运动':
                iconClass = 'fas fa-home';
                break;
            case '亲子运动':
                iconClass = 'fas fa-users';
                break;
            case '基础体能':
                iconClass = 'fas fa-dumbbell';
                break;
            case '游泳技能':
                iconClass = 'fas fa-swimmer';
                break;
            case '团队运动':
                iconClass = 'fas fa-users';
                break;
            case '专项训练':
                iconClass = 'fas fa-running';
                break;
            case '有氧训练':
                iconClass = 'fas fa-bicycle';
                break;
            case '力量训练':
                iconClass = 'fas fa-dumbbell';
                break;
            case '运动营养':
                iconClass = 'fas fa-apple-alt';
                break;
            case '情绪管理':
                iconClass = 'fas fa-smile';
                break;
            case '健康饮食':
                iconClass = 'fas fa-apple-alt';
                break;
            case '季节性活动':
                iconClass = 'fas fa-tree';
                break;
            case '音乐学习':
                iconClass = 'fas fa-music';
                break;
            case '自然探索':
                iconClass = 'fas fa-leaf';
                break;
            case '创意思维':
                iconClass = 'fas fa-lightbulb';
                break;
            default:
                iconClass = 'fas fa-star';
        }
        
        let html = `
            <li>
                <i class="${iconClass}"></i> ${activityName}
                <ul>
        `;
        
        tasks.forEach(task => {
            html += `<li><i class="fas fa-check-circle"></i> ${task}</li>`;
        });
        
        html += `
                </ul>
            </li>
        `;
        
        return html;
    }

    // 初始化活动提醒板
    function initializeActivityReminder() {
        // 创建活动提醒部分
        const reminderSection = document.createElement('section');
        reminderSection.id = 'activity-reminder';
        
        const reminderTitle = document.createElement('h2');
        reminderTitle.innerHTML = '<i class="fas fa-bell"></i> 今日活动提醒';
        reminderSection.appendChild(reminderTitle);
        
        // 创建提醒容器 - 内容会在updateActivityReminder中生成
        
        // 添加到页面
        const main = document.querySelector('main');
        main.appendChild(reminderSection);
        
        // 初始更新内容
        updateActivityReminder();
        
        // 设置自动更新 - 每分钟更新一次
        setInterval(updateActivityReminder, 60000);
    }
    
    // 格式化时间
    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    
    // 格式化日期
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const weekday = weekdays[date.getDay()];
        return `${year}年${month}月${day}日 ${weekday}`;
    }
    
    // 获取活动提示内容
    function getActivityTips(category) {
        // 获取适合当前年龄的活动
        const suitableActivities = getSuitableActivities(category, currentAge);
        
        // 如果没有合适的活动，返回默认提示
        if (suitableActivities.length === 0) {
            return '<div class="activity-tip">没有适合当前年龄的活动提示</div>';
        }
        
        // 随机选择一个活动
        const randomIndex = Math.floor(Math.random() * suitableActivities.length);
        const selectedActivity = suitableActivities[randomIndex];
        const tasks = activities[category][selectedActivity].tasks;
        
        // 随机选择1-3个任务作为提示
        const tasksToShow = Math.min(3, tasks.length);
        const shuffledTasks = [...tasks].sort(() => 0.5 - Math.random()).slice(0, tasksToShow);
        
        // 构建HTML输出
        let html = `<div class="activity-name-tip">${selectedActivity}:</div>`;
        html += '<ul class="activity-tips">';
        shuffledTasks.forEach(task => {
            html += `<li class="activity-tip">${task}</li>`;
        });
        html += '</ul>';
        
        return html;
    }

    // 初始化时间表
    function initializeSchedule() {
        // 检查是否已经存在时间表
        if (document.getElementById('daily-schedule')) {
            return;
        }
        
        // 创建时间表部分
        const scheduleSection = document.createElement('section');
        scheduleSection.id = 'daily-schedule';
        
        const scheduleTitle = document.createElement('h2');
        scheduleTitle.innerHTML = '<i class="fas fa-clock"></i> 每日时间安排';
        scheduleSection.appendChild(scheduleTitle);
        
        const scheduleTable = document.createElement('table');
        scheduleTable.className = 'schedule-table';
        
        // 创建表头
        const tableHeader = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const timeHeader = document.createElement('th');
        timeHeader.textContent = '时间';
        headerRow.appendChild(timeHeader);
        
        const activityHeader = document.createElement('th');
        activityHeader.textContent = '活动类型';
        headerRow.appendChild(activityHeader);
        
        const detailHeader = document.createElement('th');
        detailHeader.textContent = '活动建议';
        headerRow.appendChild(detailHeader);
        
        const dayPartHeader = document.createElement('th');
        dayPartHeader.textContent = '时段';
        headerRow.appendChild(dayPartHeader);
        
        tableHeader.appendChild(headerRow);
        scheduleTable.appendChild(tableHeader);
        
        // 创建表体
        const tableBody = document.createElement('tbody');
        tableBody.id = 'schedule-body';
        
        for (const [time, activityInfo] of Object.entries(scheduleActivityMap)) {
            const row = document.createElement('tr');
            row.id = `schedule-row-${time.replace(/[ :]/g, '-')}`;
            
            const timeCell = document.createElement('td');
            timeCell.textContent = time;
            row.appendChild(timeCell);
            
            const activityCell = document.createElement('td');
            activityCell.textContent = activityInfo.name;
            row.appendChild(activityCell);
            
            const detailCell = document.createElement('td');
            detailCell.className = 'detail-cell';
            if (activityInfo.type) {
                detailCell.innerHTML = getScheduleDetail(activityInfo.type, activityInfo.dayPart);
            } else {
                detailCell.innerHTML = '<i>常规活动</i>';
            }
            row.appendChild(detailCell);
            
            const dayPartCell = document.createElement('td');
            dayPartCell.textContent = activityInfo.dayPart || '';
            dayPartCell.className = 'daypart-cell';
            row.appendChild(dayPartCell);
            
            tableBody.appendChild(row);
        }
        
        scheduleTable.appendChild(tableBody);
        scheduleSection.appendChild(scheduleTable);
        
        // 将时间表添加到页面
        const main = document.querySelector('main');
        main.appendChild(scheduleSection);
    }
    
    // 更新时间表中的活动内容
    function updateSchedule() {
        for (const [time, activityInfo] of Object.entries(scheduleActivityMap)) {
            if (activityInfo.type) {
                const rowId = `schedule-row-${time.replace(/[ :]/g, '-')}`;
                const detailCell = document.querySelector(`#${rowId} .detail-cell`);
                if (detailCell) {
                    detailCell.innerHTML = getScheduleDetail(activityInfo.type, activityInfo.dayPart);
                }
            }
        }
        
        // 更新活动提醒板
        updateActivityReminder();
    }
    
    // 更新活动提醒板内容
    function updateActivityReminder() {
        const reminderSection = document.getElementById('activity-reminder');
        if (!reminderSection) return;
        
        // 移除旧的提醒容器，保留标题
        const oldReminderContainer = reminderSection.querySelector('.reminder-container');
        const oldClockContainer = reminderSection.querySelector('.clock-container');
        if (oldReminderContainer) reminderSection.removeChild(oldReminderContainer);
        if (oldClockContainer) reminderSection.removeChild(oldClockContainer);
        
        // 创建提醒容器
        const reminderContainer = document.createElement('div');
        reminderContainer.className = 'reminder-container';
        
        // 获取当前时间
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        // 根据当前时间找到相应的活动
        let currentActivity = null;
        let nextActivity = null;
        let currentActivityTime = '';
        let nextActivityTime = '';
        
        const timeSlots = Object.keys(scheduleActivityMap);
        
        for (let i = 0; i < timeSlots.length; i++) {
            const timeSlot = timeSlots[i];
            const [startTime, endTime] = timeSlot.split(' - ');
            
            // 处理单个时间点的情况（就寝时间）
            if (!endTime) {
                const startHour = parseInt(startTime.split(':')[0]);
                if (currentHour >= startHour) {
                    currentActivity = scheduleActivityMap[timeSlot];
                    currentActivityTime = timeSlot;
                    nextActivity = null;
                    nextActivityTime = '';
                }
                continue;
            }
            
            const startHour = parseInt(startTime.split(':')[0]);
            const startMinute = parseInt(startTime.split(':')[1]);
            const endHour = parseInt(endTime.split(':')[0]);
            const endMinute = parseInt(endTime.split(':')[1]);
            
            // 检查当前时间是否在此时间段内
            if ((currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) && 
                (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute))) {
                currentActivity = scheduleActivityMap[timeSlot];
                currentActivityTime = timeSlot;
                nextActivity = i < timeSlots.length - 1 ? scheduleActivityMap[timeSlots[i + 1]] : null;
                nextActivityTime = i < timeSlots.length - 1 ? timeSlots[i + 1] : '';
                break;
            }
        }
        
        // 如果当前时间不在任何活动范围内，找出下一个活动
        if (!currentActivity) {
            for (let i = 0; i < timeSlots.length; i++) {
                const timeSlot = timeSlots[i];
                const [startTime] = timeSlot.split(' - ');
                const startHour = parseInt(startTime.split(':')[0]);
                const startMinute = parseInt(startTime.split(':')[1] || 0);
                
                if (startHour > currentHour || (startHour === currentHour && startMinute > currentMinute)) {
                    nextActivity = scheduleActivityMap[timeSlot];
                    nextActivityTime = timeSlot;
                    break;
                }
            }
        }
        
        // 创建当前活动卡片
        const currentCard = document.createElement('div');
        currentCard.className = 'reminder-card current-activity';
        
        if (currentActivity) {
            // 计算剩余时间
            let remainingTime = '';
            if (currentActivityTime !== '20:00') { // 不是就寝时间
                const [, endTime] = currentActivityTime.split(' - ');
                const endHour = parseInt(endTime.split(':')[0]);
                const endMinute = parseInt(endTime.split(':')[1]);
                
                const totalMinutesRemaining = (endHour - currentHour) * 60 + (endMinute - currentMinute);
                const hoursRemaining = Math.floor(totalMinutesRemaining / 60);
                const minutesRemaining = totalMinutesRemaining % 60;
                
                if (hoursRemaining > 0) {
                    remainingTime = `还剩 ${hoursRemaining} 小时 ${minutesRemaining} 分钟`;
                } else {
                    remainingTime = `还剩 ${minutesRemaining} 分钟`;
                }
            }
            
            currentCard.innerHTML = `
                <div class="card-header">
                    <h3>当前活动 <span class="time-badge">${currentActivityTime}</span></h3>
                    ${remainingTime ? `<div class="remaining-time">${remainingTime}</div>` : ''}
                </div>
                <div class="card-content">
                    <div class="activity-name">${currentActivity.name}</div>
                    <div class="activity-detail">
                        ${currentActivity.type ? getActivityTips(currentActivity.type) : '这是日常活动，请按时完成。'}
                    </div>
                </div>
            `;
        } else {
            currentCard.innerHTML = `
                <div class="card-header">
                    <h3>当前没有安排的活动</h3>
                </div>
                <div class="card-content">
                    <div class="activity-name">休息时间</div>
                    <div class="activity-detail">可以自由安排你的时间。</div>
                </div>
            `;
        }
        
        reminderContainer.appendChild(currentCard);
        
        // 创建下一个活动卡片
        if (nextActivity) {
            const nextCard = document.createElement('div');
            nextCard.className = 'reminder-card next-activity';
            
            // 计算到下一个活动的时间
            let timeToNext = '';
            if (nextActivityTime) {
                const [nextStartTime] = nextActivityTime.split(' - ');
                const nextStartHour = parseInt(nextStartTime.split(':')[0]);
                const nextStartMinute = parseInt(nextStartTime.split(':')[1] || 0);
                
                const totalMinutesToNext = (nextStartHour - currentHour) * 60 + (nextStartMinute - currentMinute);
                const hoursToNext = Math.floor(totalMinutesToNext / 60);
                const minutesToNext = totalMinutesToNext % 60;
                
                if (hoursToNext > 0) {
                    timeToNext = `${hoursToNext} 小时 ${minutesToNext} 分钟后开始`;
                } else {
                    timeToNext = `${minutesToNext} 分钟后开始`;
                }
            }
            
            nextCard.innerHTML = `
                <div class="card-header">
                    <h3>下一个活动 <span class="time-badge">${nextActivityTime}</span></h3>
                    ${timeToNext ? `<div class="time-to-next">${timeToNext}</div>` : ''}
                </div>
                <div class="card-content">
                    <div class="activity-name">${nextActivity.name}</div>
                    <div class="activity-detail">
                        ${nextActivity.type ? getActivityTips(nextActivity.type) : '这是日常活动，请提前准备。'}
                    </div>
                </div>
            `;
            
            reminderContainer.appendChild(nextCard);
        }
        
        reminderSection.appendChild(reminderContainer);
        
        // 添加时钟更新
        const clockContainer = document.createElement('div');
        clockContainer.className = 'clock-container';
        clockContainer.innerHTML = `
            <div class="clock">
                <div class="clock-face">
                    <div class="clock-time" id="current-time">${formatTime(now)}</div>
                    <div class="clock-date" id="current-date">${formatDate(now)}</div>
                </div>
            </div>
        `;
        
        reminderSection.appendChild(clockContainer);
        
        // 更新时钟 - 每秒更新一次
        const clockUpdateInterval = setInterval(() => {
            const now = new Date();
            const timeElement = document.getElementById('current-time');
            const dateElement = document.getElementById('current-date');
            if (timeElement && dateElement) {
                timeElement.textContent = formatTime(now);
                dateElement.textContent = formatDate(now);
            } else {
                // 如果元素不存在，清除定时器
                clearInterval(clockUpdateInterval);
            }
        }, 1000);
    }

    // 初始化天文和大自然动效
    function initializeNatureEffects() {
        const natureBackground = document.getElementById('nature-background');
        
        // 创建星星
        createStars(natureBackground);
        
        // 创建流星（间隔触发，更频繁）
        setInterval(() => {
            createShootingStar(natureBackground);
        }, 4000); // 从8000ms减少到4000ms
        
        // 初始创建更多云朵
        for (let i = 0; i < 8; i++) { // 从5增加到8
            setTimeout(() => {
                createCloud(natureBackground);
            }, i * 8000); // 每8秒创建一朵新云
        }
        
        // 定期创建新的云朵（更频繁）
        setInterval(() => {
            createCloud(natureBackground);
        }, 20000); // 从30000ms减少到20000ms
        
        // 创建飘落的叶子（间隔触发，更频繁）
        setInterval(() => {
            createLeaf(natureBackground);
        }, 2000); // 从3000ms减少到2000ms
        
        // 批量创建叶子
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createLeaf(natureBackground);
                }, i * 500);
            }
        }, 10000);
        
        // 创建蝴蝶（间隔触发，更频繁）
        setInterval(() => {
            createButterfly(natureBackground);
        }, 10000); // 从15000ms减少到10000ms
        
        // 偶尔创建一群蝴蝶
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createButterfly(natureBackground);
                }, i * 1000);
            }
        }, 30000);
    }
    
    // 创建星星
    function createStars(container) {
        const starCount = window.innerWidth < 768 ? 80 : 150; // 从50/100增加到80/150
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // 随机大小（略微增大）
            const size = Math.random() * 3.5 + 1; // 从3+1增加到3.5+1
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // 随机位置
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            
            // 随机延迟动画
            star.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(star);
        }
    }
    
    // 创建流星
    function createShootingStar(container) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // 随机位置
        const posX = Math.random() * 100;
        const posY = Math.random() * 30;
        shootingStar.style.left = `${posX}%`;
        shootingStar.style.top = `${posY}%`;
        
        // 随机大小
        const size = Math.random() * 2 + 2;
        shootingStar.style.width = `${size}px`;
        shootingStar.style.height = `${size}px`;
        shootingStar.style.boxShadow = `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.5)`;
        
        // 添加到容器
        container.appendChild(shootingStar);
        
        // 动画完成后移除元素
        setTimeout(() => {
            container.removeChild(shootingStar);
        }, 5000);
    }
    
    // 创建云朵
    function createCloud(container) {
        const cloudGroup = document.createElement('div');
        cloudGroup.style.position = 'absolute';
        
        // 随机位置
        const posY = Math.random() * 40 + 10;
        cloudGroup.style.top = `${posY}%`;
        
        // 随机速度
        const duration = Math.random() * 30 + 50;
        cloudGroup.style.animationDuration = `${duration}s`;
        
        // 创建云朵群（由多个重叠的圆形组成）
        const cloudSize = Math.random() * 50 + 50;
        const cloudParts = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < cloudParts; i++) {
            const cloudPart = document.createElement('div');
            cloudPart.className = 'cloud';
            
            const partSize = cloudSize * (0.6 + Math.random() * 0.4);
            cloudPart.style.width = `${partSize}px`;
            cloudPart.style.height = `${partSize * 0.6}px`;
            
            cloudPart.style.left = `${i * (cloudSize/3)}px`;
            cloudPart.style.top = `${Math.random() * 20}px`;
            
            cloudGroup.appendChild(cloudPart);
        }
        
        // 添加到容器并设置动画
        cloudGroup.className = 'cloud';
        container.appendChild(cloudGroup);
        
        // 动画完成后移除元素
        setTimeout(() => {
            container.removeChild(cloudGroup);
        }, duration * 1000);
    }
    
    // 创建飘落的叶子
    function createLeaf(container) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // 随机位置
        const posX = Math.random() * 100;
        leaf.style.left = `${posX}%`;
        leaf.style.top = '-20px';
        
        // 随机大小
        const size = Math.random() * 10 + 10;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        
        // 随机旋转
        leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // 随机颜色变化
        const hue = Math.random() * 40 + 80; // 绿色到黄色范围
        leaf.style.filter = `hue-rotate(${hue}deg)`;
        
        // 随机动画速度
        const duration = Math.random() * 5 + 10;
        leaf.style.animationDuration = `${duration}s`;
        
        // 添加到容器
        container.appendChild(leaf);
        
        // 动画完成后移除元素
        setTimeout(() => {
            if (container.contains(leaf)) {
                container.removeChild(leaf);
            }
        }, duration * 1000);
    }
    
    // 创建蝴蝶
    function createButterfly(container) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // 随机大小
        const size = Math.random() * 15 + 15;
        butterfly.style.width = `${size}px`;
        butterfly.style.height = `${size}px`;
        
        // 随机颜色变化
        const hue = Math.random() * 300;
        butterfly.style.filter = `hue-rotate(${hue}deg)`;
        
        // 随机动画速度
        const duration = Math.random() * 10 + 15;
        butterfly.style.animationDuration = `${duration}s`;
        
        // 添加到容器
        container.appendChild(butterfly);
        
        // 动画完成后移除元素
        setTimeout(() => {
            if (container.contains(butterfly)) {
                container.removeChild(butterfly);
            }
        }, duration * 1000);
    }

    // 添加CSS样式到页面，为新增的dayPart列设置样式
    const addDayPartStyles = function() {
        // 检查是否已经添加了样式
        if (document.getElementById('daypart-styles')) {
            return;
        }

        const styleElement = document.createElement('style');
        styleElement.id = 'daypart-styles';
        styleElement.textContent = `
            .daypart-cell {
                font-weight: bold;
                text-align: center;
                color: #555;
            }
            
            tr[data-current="true"] .daypart-cell {
                color: #1A237E;
            }
            
            @media (max-width: 768px) {
                .daypart-cell {
                    display: none;
                }
            }
        `;
        document.head.appendChild(styleElement);
    };

    // 在页面加载时添加dayPart样式
    addDayPartStyles();

    // 显示当前活动和下一个活动
    function updateActivityDisplay(currentActivity, nextActivity) {
        // 查找或创建活动提醒容器
        let reminderContainer = document.getElementById('activity-reminder');
        
        if (!reminderContainer) {
            // 创建新的提醒容器
            reminderContainer = document.createElement('div');
            reminderContainer.id = 'activity-reminder';
            reminderContainer.className = 'activity-reminder';
            document.body.appendChild(reminderContainer);
            
            // 添加标题
            const reminderTitle = document.createElement('h3');
            reminderTitle.innerHTML = '<i class="fas fa-bell"></i> 活动提醒';
            reminderContainer.appendChild(reminderTitle);
            
            // 创建当前活动容器
            const currentActivityContainer = document.createElement('div');
            currentActivityContainer.id = 'current-activity';
            currentActivityContainer.className = 'reminder-section';
            
            const currentActivityTitle = document.createElement('h4');
            currentActivityTitle.textContent = '当前活动';
            currentActivityContainer.appendChild(currentActivityTitle);
            
            const currentActivityContent = document.createElement('p');
            currentActivityContent.id = 'current-activity-content';
            currentActivityContainer.appendChild(currentActivityContent);
            
            reminderContainer.appendChild(currentActivityContainer);
            
            // 创建下一个活动容器
            const nextActivityContainer = document.createElement('div');
            nextActivityContainer.id = 'next-activity';
            nextActivityContainer.className = 'reminder-section';
            
            const nextActivityTitle = document.createElement('h4');
            nextActivityTitle.textContent = '下一个活动';
            nextActivityContainer.appendChild(nextActivityTitle);
            
            const nextActivityContent = document.createElement('p');
            nextActivityContent.id = 'next-activity-content';
            nextActivityContainer.appendChild(nextActivityContent);
            
            reminderContainer.appendChild(nextActivityContainer);
            
            // 创建时间显示
            const timeDisplay = document.createElement('div');
            timeDisplay.className = 'time-display';
            
            const currentTime = document.createElement('p');
            currentTime.id = 'current-time';
            timeDisplay.appendChild(currentTime);
            
            const currentDate = document.createElement('p');
            currentDate.id = 'current-date';
            timeDisplay.appendChild(currentDate);
            
            reminderContainer.appendChild(timeDisplay);
        }
        
        // 更新当前活动
        const currentActivityContent = document.getElementById('current-activity-content');
        if (currentActivity) {
            // 清除所有高亮的行
            document.querySelectorAll('#schedule-body tr').forEach(row => {
                row.setAttribute('data-current', 'false');
                row.style.backgroundColor = '';
            });
            
            // 高亮当前活动行
            const activitiesRows = document.querySelectorAll('#schedule-body tr');
            for (let i = 0; i < activitiesRows.length; i++) {
                const row = activitiesRows[i];
                const rowTimeCell = row.querySelector('td:first-child');
                if (rowTimeCell && rowTimeCell.textContent.includes(Object.keys(scheduleActivityMap).find(key => scheduleActivityMap[key] === currentActivity))) {
                    row.setAttribute('data-current', 'true');
                    row.style.backgroundColor = 'rgba(255, 224, 130, 0.3)';
                    break;
                }
            }
            
            // 获取当前活动的建议
            let activitySuggestion = '';
            if (currentActivity.type) {
                const activityDetails = getScheduleDetail(currentActivity.type, currentActivity.dayPart);
                activitySuggestion = `
                    <div class="activity-name">${currentActivity.name}</div>
                    <div class="activity-details">${activityDetails}</div>
                    <div class="activity-time-part"><i class="fas fa-sun"></i> ${currentActivity.dayPart}时段</div>
                `;
            } else {
                activitySuggestion = `
                    <div class="activity-name">${currentActivity.name}</div>
                    <div class="activity-details">常规活动时间</div>
                    <div class="activity-time-part"><i class="fas fa-sun"></i> ${currentActivity.dayPart}时段</div>
                `;
            }
            
            currentActivityContent.innerHTML = activitySuggestion;
        } else {
            currentActivityContent.innerHTML = '<i>暂无当前活动</i>';
        }
        
        // 更新下一个活动
        const nextActivityContent = document.getElementById('next-activity-content');
        if (nextActivity) {
            let nextActivitySuggestion = '';
            if (nextActivity.type) {
                const activityDetails = getScheduleDetail(nextActivity.type, nextActivity.dayPart);
                nextActivitySuggestion = `
                    <div class="activity-name">${nextActivity.name}</div>
                    <div class="activity-details">${activityDetails}</div>
                    <div class="activity-time-part"><i class="fas fa-sun"></i> ${nextActivity.dayPart}时段</div>
                `;
            } else {
                nextActivitySuggestion = `
                    <div class="activity-name">${nextActivity.name}</div>
                    <div class="activity-details">常规活动时间</div>
                    <div class="activity-time-part"><i class="fas fa-sun"></i> ${nextActivity.dayPart}时段</div>
                `;
            }
            
            nextActivityContent.innerHTML = nextActivitySuggestion;
        } else {
            nextActivityContent.innerHTML = '<i>今天的活动已经结束</i>';
        }
    }
}); 