/*
 * Script utama untuk demo platform Clovera Learn.  
 * Menginisialisasi halaman yang berbeda berdasarkan atribut data-page pada body.  
 * Berisi data dummy untuk kelas, modul, forum lomba dan lapak tutor.
 */

(function () {
    /**
     * Dataset Kelas.  
     * Setiap kelas memiliki id unik, nama, deskripsi dan modul-modul.  
     * Modul memiliki judul, deskripsi, url video (embed YouTube) dan kuis sederhana.  
     */
    const classesData = [
        {
            id: 'akuntansi',
            name: 'Kelas Akuntansi Dasar',
            description: 'Belajar dasar akuntansi dan pencatatan keuangan dengan modul terstruktur.',
            modules: [
                {
                    image: 'images/learning_illustration.png',
                    title: 'Pengantar Akuntansi',
                    description: 'Mengenal konsep dasar akuntansi dan istilah-istilah penting.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Apa persamaan dasar akuntansi?',
                                options: [
                                    'Aktiva + Modal = Utang',
                                    'Aktiva = Utang + Modal',
                                    'Modal = Aktiva - Pendapatan',
                                    'Aktiva = Beban + Pendapatan'
                                ],
                                answer: 1
                            },
                            {
                                question: 'Transaksi pembelian perlengkapan dicatat pada sisi…',
                                options: [
                                    'Debet',
                                    'Kredit',
                                    'Neraca',
                                    'Laba Rugi'
                                ],
                                answer: 0
                            },
                            {
                                question: 'Laporan yang menunjukkan hasil usaha perusahaan adalah…',
                                options: [
                                    'Neraca',
                                    'Arus Kas',
                                    'Laba Rugi',
                                    'Perubahan Modal'
                                ],
                                answer: 2
                            }
                        ],
                        passScore: 70
                    }
                },
                {
                    image: 'images/learning_illustration.png',
                    title: 'Jurnal dan Buku Besar',
                    description: 'Memahami cara membuat jurnal umum dan memposting ke buku besar.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Buku besar berfungsi untuk…',
                                options: [
                                    'Mencatat semua transaksi secara kronologis',
                                    'Menggolongkan akun-akun sejenis',
                                    'Menyusun laporan keuangan',
                                    'Menghitung saldo akhir kas'
                                ],
                                answer: 1
                            },
                            {
                                question: 'Saldo normal akun beban adalah…',
                                options: [
                                    'Debet',
                                    'Kredit',
                                    'Nol',
                                    'Tidak tentu'
                                ],
                                answer: 0
                            }
                        ],
                        passScore: 70
                    }
                }
            ]
        },
        {
            id: 'jepang-a1',
            name: 'Bahasa Jepang A1',
            description: 'Pelajari dasar-dasar bahasa Jepang untuk pemula (level A1).',
            modules: [
                {
                    image: 'images/learning_illustration.png',
                    title: 'Hiragana & Katakana',
                    description: 'Belajar alfabet hiragana dan katakana dengan cara mudah.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Karakter あ diucapkan sebagai…',
                                options: ['a', 'i', 'u', 'e'],
                                answer: 0
                            },
                            {
                                question: 'Karakter ン termasuk dalam alfabet…',
                                options: ['Hiragana', 'Katakana', 'Kanji', 'Romanji'],
                                answer: 1
                            }
                        ],
                        passScore: 70
                    }
                },
                {
                    image: 'images/learning_illustration.png',
                    title: 'Salam dan Perkenalan',
                    description: 'Mempelajari ungkapan salam dan cara memperkenalkan diri.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Ucapan salam “selamat pagi” dalam bahasa Jepang adalah…',
                                options: ['Konnichiwa', 'Ohayou gozaimasu', 'Konbanwa', 'Arigatou'],
                                answer: 1
                            },
                            {
                                question: 'Kalimat “Watashi wa Budi desu” artinya…',
                                options: ['Nama saya Budi', 'Terima kasih Budi', 'Selamat tinggal, Budi', 'Maaf Budi'],
                                answer: 0
                            }
                        ],
                        passScore: 70
                    }
                }
            ]
        },
        {
            id: 'jepang-a2',
            name: 'Bahasa Jepang A2',
            description: 'Tingkatkan kemampuan bahasa Jepang ke level A2 dengan materi lanjutan.',
            modules: [
                {
                    image: 'images/learning_illustration.png',
                    title: 'Kosakata Sehari-hari',
                    description: 'Memperbanyak perbendaharaan kata untuk percakapan sehari-hari.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Kata “gakkou” berarti…',
                                options: ['Sekolah', 'Rumah', 'Teman', 'Makanan'],
                                answer: 0
                            },
                            {
                                question: '“Tabemasu” artinya…',
                                options: ['Minum', 'Makan', 'Tidur', 'Bekerja'],
                                answer: 1
                            }
                        ],
                        passScore: 70
                    }
                },
                {
                    image: 'images/learning_illustration.png',
                    title: 'Tata Bahasa Dasar',
                    description: 'Memahami pola kalimat dasar dan struktur tata bahasa.',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    quiz: {
                        questions: [
                            {
                                question: 'Partikel “wa” berfungsi sebagai…',
                                options: ['Penanda subjek', 'Penanda objek', 'Penanda lokasi', 'Penanda waktu'],
                                answer: 0
                            },
                            {
                                question: 'Kalimat pola S-O-V yang benar adalah…',
                                options: ['Saya makan nasi', 'Nasi saya makan', 'Makan nasi saya', 'Saya nasi makan'],
                                answer: 1
                            }
                        ],
                        passScore: 70
                    }
                }
            ]
        }
    ];

    /**
     * Dataset Forum Lomba.  
     * Setiap objek mewakili sebuah poster lomba dengan atribut untuk filtrasi.  
     */
    const competitionsData = [
        {
            title: 'Lomba Akuntansi Nasional',
            region: 'Nasional',
            major: 'Akuntansi',
            level: 'Universitas',
            poster: 'images/accounting_poster.png',
            description: 'Kompetisi akuntansi tingkat nasional dengan hadiah jutaan rupiah.'
        },
        {
            title: 'Japanese Speech Contest',
            region: 'Provinsi',
            major: 'Bahasa',
            level: 'Universitas',
            poster: 'images/japanese_poster.png',
            description: 'Kontes pidato bahasa Jepang untuk mahasiswa tingkat provinsi.'
        },
        {
            title: 'Olimpiade Matematika',
            region: 'Kota',
            major: 'Matematika',
            level: 'SMA',
            poster: 'images/math_poster.png',
            description: 'Olimpiade matematika untuk pelajar SMA tingkat kota.'
        }
    ];

    /**
     * Dataset Tutor.  
     * Menyimpan daftar tutor dengan detail keahlian, rating dan informasi kontak.  
     */
    const tutorsData = [
        {
            name: 'Budi Santoso',
            expertise: ['Akuntansi', 'Keuangan'],
            rating: 4.8,
            price: 'Rp 100.000/jam',
            description: 'Berpengalaman sebagai akuntan publik dan konsultan keuangan.',
            contact: 'Email: budi@example.com\nWhatsApp: 0812-1234-5678'
        },
        {
            name: 'Sakura Tanaka',
            expertise: ['Bahasa Jepang'],
            rating: 4.7,
            price: 'Rp 120.000/jam',
            description: 'Tutor bahasa Jepang dengan sertifikasi JLPT N2.',
            contact: 'Email: sakura@example.com\nLine: sakuralearn'
        },
        {
            name: 'Ahmad Rahmat',
            expertise: ['Matematika'],
            rating: 4.9,
            price: 'Rp 90.000/jam',
            description: 'Pengajar matematika olimpiade berpengalaman.',
            contact: 'Email: ahmad@example.com\nTelegram: @ahmadmath'
        },
        {
            name: 'Lina Wijaya',
            expertise: ['Bahasa Inggris', 'Akuntansi'],
            rating: 4.5,
            price: 'Rp 110.000/jam',
            description: 'Tutor multibahasa dan akuntansi.',
            contact: 'Email: lina@example.com\nInstagram: @linatutor'
        }
    ];

    /**
     * Menginisialisasi halaman daftar kelas.  
     * Membuat kartu untuk setiap kelas dan menyisipkannya ke container.
     */
    function initClassesPage() {
        const container = document.getElementById('classes-container');
        classesData.forEach(cls => {
            const card = document.createElement('div');
            card.className = 'card';
            // konten kartu
            const body = document.createElement('div');
            body.className = 'card-body';
            const title = document.createElement('h3');
            title.className = 'card-title';
            title.textContent = cls.name;
            const desc = document.createElement('p');
            desc.className = 'card-desc';
            desc.textContent = cls.description;
            const actions = document.createElement('div');
            actions.className = 'card-actions';
            const link = document.createElement('a');
            link.className = 'btn small';
            link.href = `class_detail.html?id=${cls.id}`;
            link.textContent = 'Mulai Kelas';
            actions.appendChild(link);
            body.appendChild(title);
            body.appendChild(desc);
            body.appendChild(actions);
            card.appendChild(body);
            container.appendChild(card);
        });
    }

    /**
     * Menginisialisasi halaman detail kelas.  
     * Menampilkan modul secara berurutan, menonton video dan kuis untuk membuka modul berikutnya.  
     */
    function initClassDetailPage() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const classData = classesData.find(c => c.id === id);
        if (!classData) return;
        document.getElementById('class-title').textContent = classData.name;
        document.getElementById('class-description').textContent = classData.description;
        const container = document.getElementById('module-container');
        // State untuk modul yang sedang aktif
        let currentModule = 0;

        // Fungsi menampilkan modul
        function renderModule(index) {
            container.innerHTML = '';
            const module = classData.modules[index];
            const modDiv = document.createElement('div');
            modDiv.className = 'module';
            const title = document.createElement('h3');
            title.textContent = `${index + 1}. ${module.title}`;
            const desc = document.createElement('p');
            desc.textContent = module.description;
            // Video atau gambar ilustrasi
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';
            if (module.image) {
                // Jika menggunakan gambar, ubah padding wrapper agar gambar terlihat
                videoWrapper.style.paddingBottom = '0';
                videoWrapper.style.height = 'auto';
                // Gunakan gambar ilustrasi sebagai pengganti video untuk demo offline
                const img = document.createElement('img');
                img.src = module.image;
                img.alt = module.title;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                videoWrapper.appendChild(img);
            } else if (module.videoUrl) {
                // Jika ada video URL, gunakan iframe YouTube
                const iframe = document.createElement('iframe');
                iframe.src = module.videoUrl + '?rel=0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                videoWrapper.appendChild(iframe);
            }
            // Tombol mulai kuis
            const startQuizBtn = document.createElement('button');
            startQuizBtn.className = 'btn small';
            startQuizBtn.textContent = 'Mulai Kuis';
            // Kontainer kuis
            const quizDiv = document.createElement('div');
            quizDiv.className = 'quiz hidden';
            // Event untuk menampilkan kuis
            startQuizBtn.addEventListener('click', () => {
                startQuizBtn.style.display = 'none';
                quizDiv.classList.remove('hidden');
            });
            // Bangun kuis
            buildQuiz(module.quiz, quizDiv, index);
            // Susun elemen
            modDiv.appendChild(title);
            modDiv.appendChild(desc);
            modDiv.appendChild(videoWrapper);
            modDiv.appendChild(startQuizBtn);
            modDiv.appendChild(quizDiv);
            container.appendChild(modDiv);
        }

        /**
         * Membuat tampilan kuis dan menangani evaluasi.
         * @param {Object} quiz - Data kuis berisi pertanyaan dan jawaban.
         * @param {HTMLElement} container - Elemen DOM tempat kuis ditampilkan.
         * @param {number} moduleIndex - Indeks modul yang berkaitan dengan kuis.
         */
        function buildQuiz(quiz, container, moduleIndex) {
            container.innerHTML = '';
            quiz.questions.forEach((q, qi) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'quiz-question';
                const qText = document.createElement('p');
                qText.textContent = q.question;
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'quiz-options';
                q.options.forEach((opt, oi) => {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${moduleIndex}_${qi}`;
                    input.value = oi;
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(' ' + opt));
                    optionsDiv.appendChild(label);
                });
                qDiv.appendChild(qText);
                qDiv.appendChild(optionsDiv);
                container.appendChild(qDiv);
            });
            const submitBtn = document.createElement('button');
            submitBtn.className = 'btn small';
            submitBtn.textContent = 'Kirim Jawaban';
            const resultDiv = document.createElement('div');
            resultDiv.className = 'quiz-result';
            resultDiv.style.display = 'none';
            submitBtn.addEventListener('click', () => {
                // Hitung skor
                let correct = 0;
                quiz.questions.forEach((q, qi) => {
                    const selected = container.querySelector(`input[name="q${moduleIndex}_${qi}"]:checked`);
                    if (selected && parseInt(selected.value) === q.answer) {
                        correct++;
                    }
                });
                const score = (correct / quiz.questions.length) * 100;
                if (score >= quiz.passScore) {
                    resultDiv.className = 'quiz-result pass';
                    resultDiv.textContent = `Selamat! Skor kamu ${score.toFixed(0)}%. Kamu lulus.`;
                    // Jika masih ada modul berikutnya, tampilkan tombol untuk lanjut
                    if (moduleIndex + 1 < classData.modules.length) {
                        const nextBtn = document.createElement('button');
                        nextBtn.className = 'btn small';
                        nextBtn.textContent = 'Lanjut Modul Berikutnya';
                        nextBtn.addEventListener('click', () => {
                            currentModule++;
                            renderModule(currentModule);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        });
                        resultDiv.appendChild(document.createElement('br'));
                        resultDiv.appendChild(nextBtn);
                    } else {
                        // Kelas selesai
                        const finishMsg = document.createElement('p');
                        finishMsg.textContent = 'Kelas selesai! Terima kasih telah belajar.';
                        resultDiv.appendChild(document.createElement('br'));
                        resultDiv.appendChild(finishMsg);
                    }
                } else {
                    resultDiv.className = 'quiz-result fail';
                    resultDiv.textContent = `Skor kamu ${score.toFixed(0)}%. Belum lulus, coba lagi.`;
                }
                resultDiv.style.display = 'block';
            });
            container.appendChild(submitBtn);
            container.appendChild(resultDiv);
        }

        // Render modul pertama
        renderModule(currentModule);
    }

    /**
     * Menginisialisasi halaman forum.  
     * Membuat daftar poster dan menerapkan filter berdasarkan pilihan pengguna.
     */
    function initForumPage() {
        const listContainer = document.getElementById('competition-list');
        const regionSelect = document.getElementById('filter-region');
        const majorSelect = document.getElementById('filter-major');
        const levelSelect = document.getElementById('filter-level');
        const applyBtn = document.getElementById('apply-filters');
        // Fungsi untuk merender poster
        function renderList(data) {
            listContainer.innerHTML = '';
            if (data.length === 0) {
                const msg = document.createElement('p');
                msg.textContent = 'Tidak ada lomba yang sesuai filter.';
                listContainer.appendChild(msg);
                return;
            }
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                // Gambar poster
                const img = document.createElement('img');
                img.src = item.poster;
                img.alt = item.title;
                card.appendChild(img);
                // Body
                const body = document.createElement('div');
                body.className = 'card-body';
                const title = document.createElement('h3');
                title.className = 'card-title';
                title.textContent = item.title;
                const tags = document.createElement('div');
                tags.className = 'card-tags';
                tags.textContent = `${item.region} • ${item.major} • ${item.level}`;
                const desc = document.createElement('p');
                desc.className = 'card-desc';
                desc.textContent = item.description;
                body.appendChild(title);
                body.appendChild(tags);
                body.appendChild(desc);
                card.appendChild(body);
                listContainer.appendChild(card);
            });
        }
        // Tampilkan semua poster pertama kali
        renderList(competitionsData);
        // Terapkan filter saat tombol diklik
        applyBtn.addEventListener('click', () => {
            const selectedRegion = regionSelect.value;
            const selectedMajor = majorSelect.value;
            const selectedLevel = levelSelect.value;
            const filtered = competitionsData.filter(item => {
                const regionMatch = selectedRegion === 'all' || item.region === selectedRegion;
                const majorMatch = selectedMajor === 'all' || item.major === selectedMajor;
                const levelMatch = selectedLevel === 'all' || item.level === selectedLevel;
                return regionMatch && majorMatch && levelMatch;
            });
            renderList(filtered);
        });
    }

    /**
     * Menginisialisasi halaman tutor.  
     * Menampilkan daftar tutor dan menyiapkan modal untuk menampilkan kontak.
     */
    function initTutorsPage() {
        const listContainer = document.getElementById('tutor-list');
        const modal = document.getElementById('contact-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalClose = document.getElementById('modal-close');
        // Render list tutor
        tutorsData.forEach(tutor => {
            const card = document.createElement('div');
            card.className = 'card';
            const body = document.createElement('div');
            body.className = 'card-body';
            const title = document.createElement('h3');
            title.className = 'card-title';
            title.textContent = tutor.name;
            // Expertise
            const tags = document.createElement('div');
            tags.className = 'card-tags';
            tags.textContent = tutor.expertise.join(', ');
            // Rating
            const starsDiv = document.createElement('div');
            starsDiv.className = 'stars';
            // Convert rating to stars (rounded half star not implemented)
            const fullStars = Math.floor(tutor.rating);
            const half = tutor.rating - fullStars >= 0.5;
            for (let i = 0; i < fullStars; i++) {
                starsDiv.innerHTML += '★';
            }
            if (half) starsDiv.innerHTML += '☆';
            // Description
            const desc = document.createElement('p');
            desc.className = 'card-desc';
            desc.textContent = tutor.description;
            // Price
            const price = document.createElement('p');
            price.className = 'card-desc';
            price.innerHTML = `<strong>${tutor.price}</strong>`;
            // Button
            const actions = document.createElement('div');
            actions.className = 'card-actions';
            const btn = document.createElement('button');
            btn.className = 'btn small';
            btn.textContent = 'Hubungi Sekarang';
            btn.addEventListener('click', () => {
                modalTitle.textContent = `Hubungi ${tutor.name}`;
                modalBody.innerHTML = `<p>${tutor.description}</p><p><strong>Keahlian:</strong> ${tutor.expertise.join(', ')}</p><p><strong>Harga:</strong> ${tutor.price}</p><p><strong>Kontak:</strong><br>${tutor.contact.replace(/\n/g, '<br>')}</p>`;
                modal.classList.remove('hidden');
            });
            actions.appendChild(btn);
            // Compose body
            body.appendChild(title);
            body.appendChild(tags);
            body.appendChild(starsDiv);
            body.appendChild(desc);
            body.appendChild(price);
            body.appendChild(actions);
            card.appendChild(body);
            listContainer.appendChild(card);
        });
        // Tutup modal
        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }

    // Panggil inisialisasi berdasarkan halaman
    document.addEventListener('DOMContentLoaded', () => {
        const page = document.body.dataset.page;
        switch (page) {
            case 'classes':
                initClassesPage();
                break;
            case 'classDetail':
                initClassDetailPage();
                break;
            case 'forum':
                initForumPage();
                break;
            case 'tutors':
                initTutorsPage();
                break;
            default:
                // Beranda tidak memerlukan skrip khusus
                break;
        }
    });
})();