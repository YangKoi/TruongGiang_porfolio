/* ==========================================================================
   PROJECTS DATA STORE (DATABASE)
   ========================================================================== */
const projectsData = {
    "project-1": {
        title: "Hệ thống Đo lường Khí Thương mại AGA 9 (Fiscal Gas Metering Skid)",
        category: "Gas Metering",
        tags: ["Gas Metering", "AGA 9", "OMNI 6000", "Ultrasonic", "Gas Sizing", "API MPMS"],
        duration: "10 Tháng (2023)",
        role: "Kỹ sư Tự động hóa & Hiệu chuẩn chính (Lead E&I Commissioning)",
        standards: "AGA Report No. 9, AGA Report No. 8, API MPMS Chapter 21.1",
        technologies: "Flow Computer OMNI 6000, Cảm biến siêu âm Daniel 3410, Sắc ký khí Daniel 700 GC",
        images: [
            {
                url: "images/project1.svg",
                caption: "Sơ đồ lắp ráp và căn chỉnh hệ thống Ultrasonic Metering Skid tại xưởng chế tạo"
            },
            {
                url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop",
                caption: "Công tác chạy thử nghiệm Loop Test kết nối dòng tín hiệu từ Meter về Flow Computer"
            },
            {
                url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop",
                caption: "Giao diện cấu hình phần mềm OMNI và kiểm tra các hàm tính toán nén khí AGA 8"
            }
        ],
        challenge: "Thiết kế hệ thống đo lường khí gas áp lực cao phục vụ giao nhận thương mại quốc tế (Fiscal Custody Transfer) đòi hỏi sai số toàn hệ thống cực kỳ nhỏ (<0.3%). Phải tính toán bù nhiệt độ, áp suất tức thời và kết nối dữ liệu phân tích hóa học khí đốt thời gian thực từ trạm sắc ký khí (Gas Chromatograph) để cập nhật nhiệt trị liên tục mà không gây gián đoạn dữ liệu hoặc lệch nhịp tính toán.",
        solution: "Xây dựng hệ thống đo gồm 3 nhánh đo song song (2 nhánh hoạt động + 1 nhánh dự phòng) sử dụng thiết bị đo siêu âm 4-đường truyền (4-path ultrasonic flowmeters). Tích hợp tủ Flow Computer sử dụng bộ tính toán OMNI 6000 kép dự phòng (Redundant OMNI 6000). Toàn bộ dữ liệu áp suất (PT), nhiệt độ (TT) được kết nối kép truyền về qua giao thức HART và Modbus RTU dự phòng. Lập trình giải thuật bù nén khí nén thực tế theo tiêu chuẩn AGA 8.",
        result: "Hệ thống vận hành thử nghiệm vượt qua kỳ kiểm duyệt gắt gao của Quatest 3 và đại diện giám sát quốc tế của khách hàng. Sai số đo lường thực tế đo đạc ổn định ở mức 0.15% (nhỏ hơn nhiều so với giới hạn cho phép 0.3%). Dự án bàn giao đúng tiến độ, giúp trạm trung chuyển khí vận hành trơn tru, ghi nhận lưu lượng khí chính xác trị giá hàng triệu USD mỗi ngày."
    },
    "project-2": {
        title: "Nâng cấp Hệ thống SCADA & Điều khiển Trạm Phân phối Khí Thị Vải",
        category: "PLC & SCADA",
        tags: ["TIA Portal", "S7-1500H", "WinCC", "Redundancy", "Profinet", "Industrial Network"],
        duration: "08 Tháng (2023 - 2024)",
        role: "Kỹ sư Tích hợp Hệ thống (Systems Integrator)",
        standards: "IEC 61131-3, ISA-101 (HMI Design), API RP 554",
        technologies: "Siemens CPU 1517H Hot Standby, ET200SP HA I/O, WinCC Professional V18 SCADA",
        images: [
            {
                url: "images/project2.svg",
                caption: "Bố cục tủ điều khiển kép trung tâm Siemens S7-1500H trong quá trình lắp dây"
            },
            {
                url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop",
                caption: "Giao diện SCADA giám sát vận hành thời gian thực, thiết kế theo tiêu chuẩn đồ họa ISA-101"
            }
        ],
        challenge: "Hệ thống SCADA và PLC cũ của trạm khí hoạt động hơn 10 năm đã xuống cấp, thường xuyên báo lỗi truyền thông, linh kiện thay thế khan hiếm. Thách thức lớn nhất là phải thực hiện lắp đặt tủ mới, đấu nối chuyển đổi I/O (hơn 1200 points) và vận hành chạy thử hệ điều khiển mới mà thời gian dừng trạm khí (Shut-down window) tối đa chỉ được phép trong vòng 36 giờ để tránh gián đoạn cấp khí cho các nhà máy điện.",
        solution: "Sử dụng kiến trúc bộ điều khiển dự phòng kép nóng cao cấp Siemens S7-1517H hoạt động song song. Toàn bộ trạm thu thập tín hiệu I/O sử dụng dòng ET200SP HA chuyên dùng cho dầu khí hỗ trợ Hot-Swap (tháo lắp nóng). Thiết lập mạng vòng Profinet ring dự phòng (MRP) để đảm bảo đứt một sợi cáp quang hệ thống vẫn chạy tốt. Thiết kế giao diện SCADA trên WinCC Professional tối ưu hóa màu sắc tương phản giúp nhân viên vận hành dễ theo dõi cảnh báo (Alarm Management).",
        result: "Dự án chuyển đổi hoàn thành xuất sắc trong vòng 28 giờ (sớm hơn 8 giờ so với kế hoạch ngắt khí). Trạm phân phối khí Thị Vải hoạt động ổn định 24/7 với tính sẵn sàng (Availability) đạt 99.99%. Nhân viên vận hành phản hồi cực tốt về giao diện SCADA trực quan và thời gian đáp ứng hệ thống tăng gấp 5 lần."
    },
    "project-3": {
        title: "Hệ thống Tự động hóa Hiệu chuẩn Thiết bị (Auto-Calibration Loop)",
        category: "Calibration",
        tags: ["Calibration", "ISO 17025", "Beamex", "Fluke 754", "Python", "Automation Test"],
        duration: "06 Tháng (2022)",
        role: "Kỹ sư giải pháp đo lường & Lập trình phần mềm (Software & Metrology Engineer)",
        standards: "ISO/IEC 17025, OIML R111, DKD-R 6-1",
        technologies: "Fluke 754 calibrator, Bơm tạo áp lực thủy lực Additel, Phần mềm tự động hóa Python/Qt",
        images: [
            {
                url: "images/project3.svg",
                caption: "Thiết bị đo áp suất chuẩn Fluke kết nối trực tiếp vào máy tính kiểm tra"
            },
            {
                url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=900&auto=format&fit=crop",
                caption: "Màn hình cấu hình giải thuật quét dải đo 5 điểm chuẩn (0-25-50-75-100%) và tính toán sai số tuyến tính"
            }
        ],
        challenge: "Hằng năm, trung tâm kiểm định phải hiệu chuẩn hàng nghìn thiết bị đo áp suất, chênh áp và nhiệt độ từ các giàn khoan. Việc ghi chép số liệu thủ công tại các điểm đo 0%, 25%, 50%, 75%, 100%, tự tính sai số tuyến tính bằng Excel tốn rất nhiều thời gian, dễ xảy ra sai sót chép nhầm số liệu của kỹ thuật viên và khó khăn trong việc quản lý chứng nhận hiệu chuẩn theo tiêu chuẩn chất lượng ISO 17025.",
        solution: "Nghiên cứu và phát triển bộ tích hợp phần cứng và phần mềm tự động hóa. Kết nối máy tính hiệu chuẩn Fluke 754 thông qua giao thức HART/RS232. Lập trình ứng dụng Python giao tiếp trực tiếp để điều khiển thiết bị chuẩn tự động đọc giá trị đo, kiểm soát mức độ ổn định áp suất. Phần mềm tự động ghi nhận số liệu đo, so sánh với dải sai số cho phép (MPE) của thiết bị, thực hiện tính toán độ không đảm bảo đo (Uncertainty) và tự động kết xuất chứng chỉ hiệu chuẩn dạng PDF mã hóa chống sửa đổi.",
        result: "Thời gian hiệu chuẩn một thiết bị đo áp suất giảm từ 45 phút xuống chỉ còn 12 phút (tiết kiệm hơn 70% thời gian). Loại bỏ hoàn toàn lỗi nhập sai dữ liệu do con người. Hệ thống phần mềm được đánh giá và phê duyệt phù hợp với quy trình ISO/IEC 17025 của phòng thí nghiệm đo lường."
    },
    "project-4": {
        title: "Kiểm toán & Đánh giá Sai số Hệ thống Đo khí Mỏ Bạch Hổ",
        category: "Assessment",
        tags: ["Uncertainty", "Audit", "API MPMS", "AGA 8", "ISO 5168", "Orifice Meter"],
        duration: "04 Tháng (2022)",
        role: "Kỹ sư kiểm toán đo lường độc lập (Independent Auditor)",
        standards: "ISO 5168 (Measurement Uncertainty), AGA Report No. 3 (Orifice Metering), API MPMS Chapter 21.1",
        technologies: "Phần mềm tính toán sai số chuyên ngành SolveMet, Phân tích thành phần khí từ sắc ký",
        images: [
            {
                url: "images/project4.svg",
                caption: "Kiểm tra hiện trạng cơ lý thuyết của tấm Orifice Plate đo dòng khí tại trạm giàn"
            },
            {
                url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
                caption: "Phiên họp làm việc thống nhất dữ liệu kiểm toán sai số giữa các đơn vị liên doanh"
            }
        ],
        challenge: "Hệ thống đo lường khí gas xuất khẩu từ mỏ Bạch Hổ sử dụng công nghệ tấm Orifice (Orifice Metering) đo chênh áp phát sinh tranh chấp số liệu khối lượng khí giao nhận giữa bên khai thác và bên vận chuyển đường ống dẫn khí. Cần một đơn vị kiểm toán độc lập đánh giá chi tiết tình trạng cơ lý của thiết bị, kiểm tra toàn bộ cấu hình tính toán trong Flow Computer và tính toán chính xác độ không đảm bảo đo (Uncertainty Analysis) toàn trạm.",
        solution: "Thực hiện tháo kiểm tra hiện trạng hình học của các tấm Orifice (kiểm tra độ sắc cạnh, độ phẳng bằng thiết bị đo vi mô). Kiểm tra độ sai lệch của các cảm biến chênh áp (DP transmitters) bằng thiết bị chuẩn áp suất. Thực hiện kết xuất log cấu hình Flow Computer để so sánh với thiết kế gốc. Sử dụng giải thuật phân tích lan truyền sai số theo tiêu chuẩn ISO 5168 và mô hình toán học AGA 3 để lập mô hình đánh giá sai số trạm khí.",
        result: "Phát hiện sai lệch 0.45% lưu lượng khí đo được do cảm biến chênh áp bị trôi điểm không (Zero-drift) và cấu hình sai hệ số giãn nở tấm Orifice trong Flow Computer. Sau khi hiệu chuẩn lại thiết bị và cập nhật thông số đúng, sai số không đảm bảo đo của trạm khí giảm về mức 0.22% (đạt yêu cầu thương mại). Báo cáo kiểm toán được cả hai bên đối tác chấp thuận, giúp giải quyết tranh chấp tài chính công bằng và thiết lập quy trình kiểm tra định kỳ chặt chẽ hơn."
    }
};

/* ==========================================================================
   NAVIGATION & UI INTERACTION MANAGEMENT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Header scroll effect
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Mobile Navigation Drawer
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    mobileNavToggle.addEventListener("click", () => {
        mobileNavToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavToggle.classList.remove("open");
            navMenu.classList.remove("open");
        });
    });

    // 3. Scrollspy active link highlight
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 4. Modal Popup Manager
    const projectCards = document.querySelectorAll(".project-card");
    const projectModal = document.getElementById("project-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalContent = document.querySelector(".modal-content");
    
    let activeCarouselIndex = 0;
    let carouselSlides = [];
    let carouselDots = [];

    // Open Modal and Load Data
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project");
            const data = projectsData[projectId];
            
            if (data) {
                loadProjectDetails(data);
                projectModal.classList.add("open");
                document.body.style.overflow = "hidden"; // Disable background scrolling
                activeCarouselIndex = 0;
                initCarousel();
            }
        });
    });

    // Close Modal
    const closeModal = () => {
        projectModal.classList.remove("open");
        document.body.style.overflow = ""; // Re-enable background scrolling
        modalContent.innerHTML = '<div class="modal-loading">Đang tải chi tiết dự án...</div>';
    };

    modalClose.addEventListener("click", closeModal);
    
    // Close modal when clicking on the backdrop/outside container
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && projectModal.classList.contains("open")) {
            closeModal();
        }
    });

    // 5. Dynamic HTML Generation for Modal content
    function loadProjectDetails(data) {
        // Build tag items list
        const tagsHtml = data.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('');
        
        // Build carousel slides
        const slidesHtml = data.images.map((img, index) => `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${img.url}')">
                <div class="slide-caption">${img.caption}</div>
            </div>
        `).join('');

        // Build carousel dot indicators
        const dotsHtml = data.images.map((_, index) => `
            <span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
        `).join('');

        // Modal layout HTML template
        modalContent.innerHTML = `
            <div class="modal-project-header">
                <span class="modal-badge">${data.category}</span>
                <h2>${data.title}</h2>
            </div>
            
            <!-- CAROUSEL SLIDESHOW -->
            <div class="modal-carousel">
                <div class="carousel-slides">
                    ${slidesHtml}
                </div>
                
                <!-- Prev/Next Controls -->
                <button class="carousel-btn carousel-prev" aria-label="Slide trước">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
                <button class="carousel-btn carousel-next" aria-label="Slide tiếp theo">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
                
                <!-- Dot Indicators -->
                <div class="carousel-dots">
                    ${dotsHtml}
                </div>
            </div>
            
            <!-- GRID DETAILS -->
            <div class="modal-grid">
                <!-- Description column -->
                <div class="modal-desc-col">
                    <div class="modal-technical-block">
                        <h5>Thách Thức Kỹ Thuật</h5>
                        <p>${data.challenge}</p>
                    </div>
                    
                    <div class="modal-technical-block" style="border-left-color: var(--secondary)">
                        <h5>Giải Pháp Thực Hiện</h5>
                        <p>${data.solution}</p>
                    </div>
                    
                    <div class="modal-technical-block" style="border-left-color: var(--success)">
                        <h5>Kết Quả Đạt Được</h5>
                        <p>${data.result}</p>
                    </div>
                </div>
                
                <!-- Sidebar info column -->
                <div class="modal-details-col">
                    <div class="detail-item">
                        <span class="label">Vai trò của bạn</span>
                        <span class="value">${data.role}</span>
                    </div>
                    
                    <div class="detail-item">
                        <span class="label">Thời gian triển khai</span>
                        <span class="value">${data.duration}</span>
                    </div>

                    <div class="detail-item">
                        <span class="label">Tiêu chuẩn áp dụng</span>
                        <span class="value">${data.standards}</span>
                    </div>
                    
                    <div class="detail-item">
                        <span class="label">Thiết bị & Công nghệ chính</span>
                        <span class="value">${data.technologies}</span>
                    </div>
                    
                    <div class="detail-item" style="margin-bottom: 0;">
                        <span class="label">Từ khóa kỹ thuật</span>
                        <div class="tag-container">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 6. Carousel Logic implementation
    function initCarousel() {
        carouselSlides = document.querySelectorAll(".carousel-slide");
        carouselDots = document.querySelectorAll(".carousel-dot");
        
        const prevBtn = document.querySelector(".carousel-prev");
        const nextBtn = document.querySelector(".carousel-next");
        
        if (carouselSlides.length <= 1) {
            // Hide navigation if there is only 1 image
            if (prevBtn) prevBtn.style.display = "none";
            if (nextBtn) nextBtn.style.display = "none";
            return;
        }

        prevBtn.addEventListener("click", showPrevSlide);
        nextBtn.addEventListener("click", showNextSlide);

        carouselDots.forEach(dot => {
            dot.addEventListener("click", () => {
                const index = parseInt(dot.getAttribute("data-index"));
                goToSlide(index);
            });
        });
    }

    function goToSlide(index) {
        // Handle wrapping limits
        if (index >= carouselSlides.length) {
            activeCarouselIndex = 0;
        } else if (index < 0) {
            activeCarouselIndex = carouselSlides.length - 1;
        } else {
            activeCarouselIndex = index;
        }

        // Update active slide class
        carouselSlides.forEach((slide, i) => {
            if (i === activeCarouselIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        // Update active dot class
        carouselDots.forEach((dot, i) => {
            if (i === activeCarouselIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function showNextSlide() {
        goToSlide(activeCarouselIndex + 1);
    }

    function showPrevSlide() {
        goToSlide(activeCarouselIndex - 1);
    }

    // Fade-in animations on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                scrollObserver.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    // Apply fade-in animation triggers
    const animateElements = document.querySelectorAll(".profile-card, .intro-stats-column, .skills-category-card, .timeline-item, .project-card, .contact-box");
    animateElements.forEach(el => {
        el.classList.add("scroll-animate");
        scrollObserver.observe(el);
    });
});
