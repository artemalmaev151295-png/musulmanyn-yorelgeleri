import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function IslamicDiagram() {
  const [currentLevel, setCurrentLevel] = useState('main');
  const [history, setHistory] = useState([]);

  const navigateTo = (level) => {
    setHistory([...history, currentLevel]);
    setCurrentLevel(level);
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousLevel = newHistory.pop();
      setHistory(newHistory);
      setCurrentLevel(previousLevel);
    }
  };

  const MainLevel = () => (
      <div className="level-container">
        <h1 className="title">Musulmanyň esasy ýaşaýyş ýörelgeleri we düzgünleri</h1>

        <div className="cards-grid">
          {[
            { title: 'Ylym almak', icon: '📚', detail: 'Bilim we ylym öwrenmek' },
            { title: 'Amal etmek', icon: '🤲', detail: 'Bilimi durmuşa geçirmek' },
            { title: 'Çagyrmak', icon: '📢', detail: 'Hakykata çagyrmak' },
            { title: 'Sabyr etmek', icon: '💎', detail: 'Kynçylyga çydamak' }
          ].map((item, idx) => (
              <div key={idx} className="principle-card" onClick={() => navigateTo('surah')}>
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-detail">{item.detail}</p>
              </div>
          ))}
        </div>

        <h1 className="title" style={{ marginTop: '3rem', marginBottom: '2rem' }}>Musulmanyň ilkinji bilmeli zady</h1>

        <div
            className="ayah-card"
            onClick={() => navigateTo('shahadah-details')}
            style={{
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
              borderColor: 'rgba(212, 175, 122, 0.4)'
            }}
        >
          <div className="ayah-content" style={{ width: '100%' }}>
            <p className="arabic" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
            </p>
            <p className="translation" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Men şaýatlyk edýärin: Alladan başga ybadada hakly ilahiň ýokdygyňa we Muhammet ﷺ Allanyň guly hem resulydygyňa.
            </p>
          </div>
        </div>
      </div>
  );

  const ShahadahDetailsLevel = () => (
      <div className="level-container">
        <h2 className="surah-title">Şaýatlyk sözleriniň içine alýan zatlary</h2>

        {/* First Block - La ilaha illa Allah - NO EMOJI */}
        <div className="definition-box" style={{ marginBottom: '1.5rem' }}>
          <div className="info-box" style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)' }}>
            <div className="info-content" style={{ width: '100%' }}>
              <p style={{ fontSize: '1.15rem', color: '#f4e4c1' }}>
                <strong>LÂ ILÂHA ILLA ALLAH</strong> şaýatlygy öz içine 2 zady alýar:
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              padding: '1.2rem',
              background: 'rgba(0, 0, 0, 0.15)',
              borderRadius: '10px',
              borderLeft: '4px solid #d4af7a'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)',
                  color: '#f4e4c1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>1</div>
                <p style={{ color: '#c9b991', fontSize: '1.05rem', margin: 0 }}>
                  <strong style={{ color: '#f4e4c1' }}>Ähli ilahleriň ybadada mynasypdygyny inkär etmek</strong>
                </p>
              </div>
            </div>

            <div style={{
              padding: '1.2rem',
              background: 'rgba(0, 0, 0, 0.15)',
              borderRadius: '10px',
              borderLeft: '4px solid #d4af7a'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)',
                  color: '#f4e4c1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>2</div>
                <p style={{ color: '#c9b991', fontSize: '1.05rem', margin: 0 }}>
                  <strong style={{ color: '#f4e4c1' }}>Ýeke-täk Allanyň ybadada mynasyp ilahdygini tassyk etmek</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block - Muhammadan abduhu wa rasuluhu - NO EMOJI */}
        <div className="definition-box" style={{ marginBottom: '1.5rem' }}>
          <div className="info-box" style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)' }}>
            <div className="info-content" style={{ width: '100%' }}>
              <p style={{ fontSize: '1.15rem', color: '#f4e4c1' }}>
                <strong>MUHAMMADAN 'ABDUHU WA RASÛLUH</strong> şaýatlygy öz içine 4 zady alýar:
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              'Pygamberiň ﷺ habar beren zatlaryna ynanmak',
              'Onuň buýruklaryny ýerine ýetirmek',
              'Onuň gadagan eden zatlaryndan gaça durmak',
              'Allaha diňe Onuň görkezişi ýaly ybadat etmek'
            ].map((item, idx) => (
                <div key={idx} style={{
                  padding: '1rem',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderRadius: '10px',
                  borderLeft: '4px solid #d4af7a'
                }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                    <div style={{
                      minWidth: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)',
                      color: '#f4e4c1',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>{idx + 1}</div>
                    <p style={{ color: '#c9b991', fontSize: '1.05rem', margin: 0 }}>{item}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Third Block - Definitions - SIMPLE BULLET LIST */}
        <div className="definition-box">
          <h3 className="definition-title">Kesgitlemeler</h3>

          <div style={{ paddingLeft: '1rem', color: '#c9b991', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '0.8rem' }}>
              • Ilah diýmek — islendik ybadat edilýän zatdyr.
            </p>
            <p style={{ marginBottom: '0.8rem' }}>
              • Allah diýmek — ybadada hakly ýeke-täk Ilah diýmekdir.
            </p>
            <p style={{ marginBottom: '0.8rem' }}>
              • Ybadat diýmek — Alla Tagallanyň gowy görýän islendik amal diýmekdir.
            </p>
            <p style={{ marginBottom: '0.8rem' }}>
              • Gul diýmek - 1) boýun edilen 2) bolýun bolýan
            </p>
            <p>
              • Resul — bu Allah tarapyndan wahy berlen we adamlara ýetirmek üçin iberilen ilçisidir.
            </p>
          </div>
        </div>
      </div>
  );

  const SurahLevel = () => (
      <div className="level-container">
        <h2 className="surah-title">Asr süresi</h2>

        <div className="ayah-list">
          <div className="ayah-card" onClick={() => navigateTo('ayah-1')}>
            <div className="ayah-number">1</div>
            <div className="ayah-content">
              <p className="arabic">وَالْعَصْرِ</p>
              <p className="translation">Wagtdan ant içýärin</p>
            </div>
          </div>

          <div className="ayah-card non-clickable">
            <div className="ayah-number">2</div>
            <div className="ayah-content">
              <p className="arabic">إِنَّ الْإِنسَانَ لَفِي خُسْرٍ</p>
              <p className="translation">Hakykatdan-da her-bir adam utulyşdadyr</p>
            </div>
          </div>

          <div className="ayah-card" onClick={() => navigateTo('ayah-2')}>
            <div className="ayah-number">3</div>
            <div className="ayah-content">
              <p className="arabic">إِلَّا الَّذِينَ آمَنُوا</p>
              <p className="translation">Emma iman edenler,</p>
            </div>
          </div>

          <div className="ayah-card" onClick={() => navigateTo('ayah-3')}>
            <div className="ayah-number">4</div>
            <div className="ayah-content">
              <p className="arabic">وَعَمِلُوا الصَّالِحَاتِ</p>
              <p className="translation">we gowy amallar edenler</p>
            </div>
          </div>

          <div className="ayah-card" onClick={() => navigateTo('ayah-5')}>
            <div className="ayah-number">5</div>
            <div className="ayah-content">
              <p className="arabic">وَتَوَاصَوْا بِالْحَقِّ</p>
              <p className="translation">we biri-birine hakykaty ýatladanlar</p>
            </div>
          </div>

          <div className="ayah-card" onClick={() => navigateTo('ayah-4')}>
            <div className="ayah-number">6</div>
            <div className="ayah-content">
              <p className="arabic">وَتَوَاصَوْا بِالصَّبْرِ</p>
              <p className="translation">we biri-birine sabyry ýatladanlar (utulyşda däldirler)</p>
            </div>
          </div>
        </div>
      </div>
  );

  const Ayah1Detail = () => (
      <div className="level-container">
        <div className="detail-header">
          <p className="arabic-large">وَالْعَصْرِ</p>
          <p className="translation-large">Wagtdan ant içýärin</p>
        </div>

        <div className="tafsir-box">
          <div className="tafsir-title">📖 Ibn Kasiriň düşündirişi</div>
          <p className="arabic-quote">قال ابن كثير: الْعَصْرُ: الزَّمَانُ الَّذِي تَقَعُ فِيهِ أَعْمَالُ بَنِي آدَمَ مِنْ خَيْرٍ وَشَرٍّ.</p>
          <p className="quote-translation">Ibn Kasir aýtdy: "Asr" — bu adamzadyň ähli hereketleriniň bolup geçýän wagtydyr, ýagşylyk bolsun ýa-da ýamanlyk.</p>
        </div>

        <div className="info-box">
          <div className="info-icon">✨</div>
          <div className="info-content">
            <p>Allah tagala öz isleýän zadyndan ant içip bilýär, emma adamlar bolsa Alladan başga zatlardan ant içip bilmeýärler.</p>
          </div>
        </div>

        <div className="hadith-box">
          <div className="hadith-title">📖 Pygamber ﷺ aýtdy</div>
          <p className="arabic-quote">«مَنْ حَلَفَ بِغَيْرِ اللَّهِ فَقَدْ أَشْرَكَ»</p>
          <p className="quote-translation">«Kim Alladan başga zatdan ant içse, ol şirk edendir.»</p>
        </div>
      </div>
  );

  const Ayah2Detail = () => (
      <div className="level-container">
        <div className="detail-header">
          <p className="arabic-large">إِلَّا الَّذِينَ آمَنُوا</p>
          <p className="translation-large">Emma iman edenler</p>
        </div>

        <div className="definition-box">
          <h3 className="definition-title">Iman sözüniň kesgitlemesi</h3>

          <div className="definition-section">
            <div className="section-icon">📝</div>
            <div className="section-content">
              <h4>Dil taýdan</h4>
              <p>Iman diýmek — tassyklamakdyr, ýagny dogry hasaplamakdyr.</p>
            </div>
          </div>

          <div className="definition-section">
            <div className="section-icon">☪️</div>
            <div className="section-content">
              <h4>Din taýdan</h4>
              <p>Iman — ýürek bilen ynanmak, dil bilen aýtmak we beden bilen amal etmekdir.</p>
              <p style={{ marginTop: '0.8rem' }}>Iman gowy amallar bilen ösýär, erbet amallar bilen peselýär.</p>
            </div>
          </div>
        </div>
      </div>
  );

  const Ayah3Detail = () => (
      <div className="level-container">
        <div className="detail-header">
          <p className="arabic-large">وَعَمِلُوا الصَّالِحَاتِ</p>
          <p className="translation-large">we gowy amallar edýänler</p>
        </div>

        <div className="definition-box">
          <h3 className="definition-title">Gowy amalyň kesgitlemesi</h3>

          <div className="info-box">
            <div className="info-icon">✨</div>
            <div className="info-content">
              <p><strong>Gowy amal</strong> — bu Allah üçin yhlas bilen edilýän we pygamberiň görkezmesine laýyk gelýän amaldyr.</p>
            </div>
          </div>
        </div>
      </div>
  );

  const Ayah5Detail = () => (
      <div className="level-container">
        <div className="detail-header">
          <p className="arabic-large">وَتَوَاصَوْا بِالْحَقِّ</p>
          <p className="translation-large">we biri-birine hakykaty ýatladanlar</p>
        </div>

        <div className="definition-box">
          <h3 className="definition-title">Göz öňünde tutulmaly şertleri:</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              'Yhlas bilen',
              'Ylym bilen',
              'Hikmet bilen',
              'Ýumşaklyk bilen',
              'Sabyr bilen'
            ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderRadius: '10px',
                  borderLeft: '4px solid #d4af7a'
                }}>
                  <div style={{
                    minWidth: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)',
                    color: '#f4e4c1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    boxShadow: '0 2px 10px rgba(139, 90, 43, 0.4)'
                  }}>
                    {idx + 1}
                  </div>
                  <p style={{ color: '#c9b991', fontSize: '1.1rem', margin: 0 }}>{item}</p>
                </div>
            ))}
          </div>

          <div className="info-box" style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
            borderColor: 'rgba(212, 175, 122, 0.5)'
          }}>
            <div className="info-icon" style={{ fontSize: '2rem' }}>❗</div>
            <div className="info-content">
              <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontWeight: '600' }}>
                Ylymsyz çagyrmak — peýdadan zyýany köp.
              </p>
            </div>
          </div>
        </div>
      </div>
  );

  const Ayah4Detail = () => (
      <div className="level-container">
        <div className="detail-header">
          <p className="arabic-large">وَتَوَاصَوْا بِالصَّبْرِ</p>
          <p className="translation-large">we biri-birine sabyry ýatladýanlar</p>
        </div>

        <div className="patience-grid">
          <h3 className="section-title">Sabyr üç görnüşde bolýar</h3>

          <div className="patience-card">
            <div className="patience-number">1</div>
            <div className="patience-content">
              <h4>Boýunbolmakda sabyr</h4>
              <p>Allanyň buýran zatlaryny ýerine ýetirmekde sabyr etmek</p>
            </div>
          </div>

          <div className="patience-card">
            <div className="patience-number">2</div>
            <div className="patience-content">
              <h4>Günälerden saklanmakda sabyr</h4>
              <p>Allanyň gadagan eden zatlaryndan saklanmakda sabyr etmek</p>
            </div>
          </div>

          <div className="patience-card">
            <div className="patience-number">3</div>
            <div className="patience-content">
              <h4>Allanyň ýazgysyna sabyr etmek</h4>
              <p>Başyňa kynçylyk gelende ýaman sözleri aýtmazlyk.</p>
            </div>
          </div>
        </div>

        <div className="info-box" style={{ marginTop: '2rem' }}>
          <div className="info-icon">📖</div>
          <div className="info-content">
            <p className="arabic" style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>وَاللَّهُ مَعَ الصَّابِرِينَ</p>
            <p style={{ fontSize: '1.1rem', color: '#d4af7a', fontWeight: '600' }}>Allah tagala sabyrly adamlar bilendir</p>
          </div>
        </div>
      </div>
  );

  return (
      <div className="app">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans:wght@400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a2a1e 0%, #0f1810 100%);
          padding: 2rem;
          font-family: 'Noto Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 90, 43, 0.03) 35px, rgba(139, 90, 43, 0.03) 70px);
          pointer-events: none;
          z-index: 0;
        }

        .level-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          background: rgba(139, 90, 43, 0.2);
          border: 2px solid #d4af7a;
          color: #f4e4c1;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .back-button:hover {
          background: rgba(139, 90, 43, 0.4);
          transform: translateX(-5px);
          box-shadow: 0 4px 20px rgba(212, 175, 122, 0.3);
        }

        .title {
          color: #f4e4c1;
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          text-shadow: 0 2px 10px rgba(212, 175, 122, 0.3);
          line-height: 1.4;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .principle-card {
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%);
          border: 2px solid rgba(212, 175, 122, 0.3);
          border-radius: 16px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .principle-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #d4af7a;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.25) 0%, rgba(76, 49, 23, 0.25) 100%);
          box-shadow: 0 10px 40px rgba(212, 175, 122, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 2px 10px rgba(212, 175, 122, 0.5));
        }

        .card-title {
          color: #f4e4c1;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-detail {
          color: #c9b991;
          font-size: 0.95rem;
        }

        .surah-title {
          color: #f4e4c1;
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(212, 175, 122, 0.3);
          text-shadow: 0 2px 10px rgba(212, 175, 122, 0.3);
        }

        .ayah-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .ayah-card {
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%);
          border: 2px solid rgba(212, 175, 122, 0.25);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          gap: 1.5rem;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .ayah-card:not(.non-clickable) {
          cursor: pointer;
        }

        .ayah-card:not(.non-clickable):hover {
          transform: translateX(8px);
          border-color: #d4af7a;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%);
          box-shadow: 0 6px 25px rgba(212, 175, 122, 0.25);
        }

        .ayah-card.non-clickable {
        }

        .ayah-number {
          min-width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%);
          color: #f4e4c1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.4);
        }

        .ayah-content {
          flex: 1;
        }

        .arabic {
          font-family: 'Amiri', serif;
          font-size: 1.6rem;
          color: #f4e4c1;
          direction: rtl;
          text-align: right;
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }

        .translation {
          color: #c9b991;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .detail-header {
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%);
          border: 2px solid rgba(212, 175, 122, 0.4);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .arabic-large {
          font-family: 'Amiri', serif;
          font-size: 2.5rem;
          color: #f4e4c1;
          direction: rtl;
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .translation-large {
          color: #d4af7a;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .tafsir-box, .hadith-box, .definition-box {
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%);
          border: 2px solid rgba(212, 175, 122, 0.3);
          border-radius: 14px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .tafsir-title, .hadith-title, .definition-title {
          color: #f4e4c1;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .arabic-quote {
          font-family: 'Amiri', serif;
          font-size: 1.4rem;
          color: #f4e4c1;
          direction: rtl;
          text-align: right;
          margin-bottom: 1rem;
          line-height: 1.8;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }

        .quote-translation {
          color: #c9b991;
          font-size: 1.05rem;
          line-height: 1.7;
          padding-left: 1rem;
          border-left: 3px solid #d4af7a;
        }

        .info-box {
          display: flex;
          gap: 1rem;
          align-items: start;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%);
          border: 2px solid rgba(212, 175, 122, 0.25);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .info-icon {
          font-size: 1.8rem;
          filter: drop-shadow(0 2px 8px rgba(212, 175, 122, 0.5));
        }

        .info-content p {
          color: #c9b991;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .definition-section {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.5rem;
          padding: 1.2rem;
          background: rgba(0, 0, 0, 0.15);
          border-radius: 10px;
        }

        .section-icon {
          font-size: 2rem;
          filter: drop-shadow(0 2px 8px rgba(212, 175, 122, 0.5));
        }

        .section-content h4 {
          color: #d4af7a;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .section-content p {
          color: #c9b991;
          font-size: 1rem;
          line-height: 1.6;
        }

        .patience-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-title {
          color: #f4e4c1;
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(212, 175, 122, 0.3);
        }

        .patience-card {
          display: flex;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%);
          border: 2px solid rgba(212, 175, 122, 0.3);
          border-radius: 14px;
          padding: 1.8rem;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .patience-card:hover {
          transform: scale(1.02);
          border-color: #d4af7a;
          box-shadow: 0 8px 30px rgba(212, 175, 122, 0.3);
        }

        .patience-number {
          min-width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%);
          color: #f4e4c1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.4);
        }

        .patience-content h4 {
          color: #f4e4c1;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .patience-content p {
          color: #c9b991;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .app {
            padding: 1rem;
          }

          .title {
            font-size: 1.8rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .arabic {
            font-size: 1.3rem;
          }

          .arabic-large {
            font-size: 1.8rem;
          }
        }
      `}</style>

        {currentLevel !== 'main' && (
            <button className="back-button" onClick={goBack}>
              <ChevronLeft size={20} />
              Yza
            </button>
        )}

        {currentLevel === 'main' && <MainLevel />}
        {currentLevel === 'shahadah-details' && <ShahadahDetailsLevel />}
        {currentLevel === 'surah' && <SurahLevel />}
        {currentLevel === 'ayah-1' && <Ayah1Detail />}
        {currentLevel === 'ayah-2' && <Ayah2Detail />}
        {currentLevel === 'ayah-3' && <Ayah3Detail />}
        {currentLevel === 'ayah-5' && <Ayah5Detail />}
        {currentLevel === 'ayah-4' && <Ayah4Detail />}
      </div>
  );
}
