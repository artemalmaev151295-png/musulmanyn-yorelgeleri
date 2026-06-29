import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function IslamicDiagram() {
  const [currentLevel, setCurrentLevel] = useState('main');
  const [history, setHistory] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);

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
      <div
        className="ayah-card main-menu-card"
        onClick={() => navigateTo('shahadah-details')}
        style={{
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
          borderColor: 'rgba(212, 175, 122, 0.4)',
          justifyContent: 'center',
          minHeight: 'unset'
        }}
      >
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.35rem', fontWeight: '700', lineHeight: '1.35' }}>
            Musulmanyň ilkinji bilmeli zady
          </p>
        </div>
      </div>

      <div
        className="ayah-card main-menu-card"
        onClick={() => navigateTo('zikirler')}
        style={{
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
          borderColor: 'rgba(212, 175, 122, 0.4)',
          justifyContent: 'center',
          minHeight: 'unset'
        }}
      >
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.35rem', fontWeight: '700', lineHeight: '1.35' }}>
            Irdenki we Agşamky
            <br />
            zikirler we dogalar
          </p>
        </div>
      </div>

      <div
        className="ayah-card main-menu-card"
        onClick={() => navigateTo('surah')}
        style={{
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
          borderColor: 'rgba(212, 175, 122, 0.4)',
          flexDirection: 'column',
          padding: '1.2rem'
        }}
      >
        <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>
          Musulmanyň esasy ýaşaýyş ýörelgeleri we düzgünleri
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
          {[
            'Ylym almak',
            'Amal etmek',
            'Çagyrmak',
            'Sabyr etmek'
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.15)', borderRadius: '10px', borderLeft: '4px solid #d4af7a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ minWidth: '26px', height: '26px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
                <p style={{ color: '#c9b991', fontSize: '1rem', margin: 0 }}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="ayah-card main-menu-card"
        onClick={() => navigateTo('tajwid')}
        style={{
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)',
          borderColor: 'rgba(212, 175, 122, 0.4)',
          justifyContent: 'center',
          minHeight: 'unset'
        }}
      >
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.35rem', fontWeight: '700', lineHeight: '1.35' }}>
            Tajwid sapaklary
          </p>
        </div>
      </div>
    </div>
  );

  const ShahadahDetailsLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Şaýatlyk sözleriniň içine alýan zatlary</h2>

      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)',
        border: '2px solid rgba(212, 175, 122, 0.25)',
        borderRadius: '14px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <p className="arabic" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
        </p>
        <p className="translation" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
          Men şaýatlyk edýärin: Alladan başga ybadada hakly ilahiň ýokdygyna we Muhammet ﷺ Allanyň guly hem resulydygyna.
        </p>
      </div>

      {/* First Block - La ilaha illa Allah */}
      <div className="definition-box" style={{ marginBottom: '1rem', padding: '1.2rem' }}>
        <div className="info-box" style={{ marginBottom: '0.8rem', padding: '1rem', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)' }}>
          <div className="info-content" style={{ width: '100%' }}>
            <p style={{ fontSize: '1rem', color: '#f4e4c1' }}>
              <strong>LÂ ILÂHA ILLA ALLAH</strong> şaýatlygy öz içine 2 zady alýar:
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {[
            <><strong style={{ color: '#f4e4c1' }}>Ähli ilahleriň ybadada mynasypdygyny inkär etmek</strong></>,
            <><strong style={{ color: '#f4e4c1' }}>Ýeke-täk Allanyň ybadada mynasyp ilahdygini tassyk etmek</strong></>
          ].map((text, idx) => (
            <div key={idx} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.15)', borderRadius: '10px', borderLeft: '4px solid #d4af7a' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.8rem' }}>
                <div style={{ minWidth: '26px', height: '26px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
                <p style={{ color: '#c9b991', fontSize: '0.95rem', margin: 0 }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Block - Muhammadan abduhu wa rasuluhu */}
      <div className="definition-box" style={{ marginBottom: '1rem', padding: '1.2rem' }}>
        <div className="info-box" style={{ marginBottom: '0.8rem', padding: '1rem', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)' }}>
          <div className="info-content" style={{ width: '100%' }}>
            <p style={{ fontSize: '1rem', color: '#f4e4c1' }}>
              <strong>MUHAMMADAN 'ABDUHU WA RASÛLUH</strong> şaýatlygy öz içine 4 zady alýar:
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {[
            'Pygamberiň ﷺ habar beren zatlaryna ynanmak',
            'Onuň buýruklaryny ýerine ýetirmek',
            'Onuň gadagan eden zatlaryndan gaça durmak',
            'Allaha diňe Onuň görkezişi ýaly ybadat etmek'
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.15)', borderRadius: '10px', borderLeft: '4px solid #d4af7a' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.8rem' }}>
                <div style={{ minWidth: '26px', height: '26px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
                <p style={{ color: '#c9b991', fontSize: '0.95rem', margin: 0 }}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Block - Definitions */}
      <div className="definition-box" style={{ padding: '1.2rem' }}>
        <h3 className="definition-title" style={{ fontSize: '1.1rem' }}>Kesgitlemeler</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {[
            'Ilah diýmek — islendik ybadat edilýän zatdyr.',
            'Allah diýmek — ybadada hakly ýeke-täk Ilah diýmekdir.',
            'Ybadat diýmek — Alla Tagallanyň gowy görýän islendik amal diýmekdir.',
            'Gul diýmek - 1) boýun edilen 2) bolýun bolýan',
            'Resul — bu Allah tarapyndan wahy berlen we adamlara ýetirmek üçin iberilen ilçisidir.'
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.15)', borderRadius: '10px', borderLeft: '4px solid #d4af7a' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.8rem' }}>
                <div style={{ minWidth: '26px', height: '26px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
                <p style={{ color: '#c9b991', fontSize: '0.95rem', margin: 0 }}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ZikirMenuLevel = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="ayah-card" onClick={() => navigateTo('irdenky')} style={{ cursor: 'pointer' }}>
          <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '1rem' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🌅</p>
            <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.8rem' }}>Irdenki zikirler</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.6' }}>Irdenki zikirleriň wagty ertir namazdan başlap, öýlän namaza çenli dowam edýär, ýöne iň gowy wagty ertir namazyndan gün dogýança.</p>
          </div>
        </div>

        <div className="ayah-card" onClick={() => navigateTo('agsamky')} style={{ cursor: 'pointer' }}>
          <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '1rem' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🌙</p>
            <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.8rem' }}>Agşamky zikirler</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.6' }}>Agşamky zikirleriň wagty öýlän namazdan ertir namazyna çenli dowam edýär, ýöne iň gowy wagty ikindi namazyndan agşam namazyna çenli.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ZCard = ({ arabic, turkmen, times }) => (
    <div style={{
      background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)',
      border: '2px solid rgba(212, 175, 122, 0.25)',
      borderRadius: '14px',
      padding: '1.5rem',
      marginBottom: '1.2rem',
      backdropFilter: 'blur(10px)'
    }}>
      <p style={{ fontFamily: "'Amiri', serif", fontSize: '1.5rem', color: '#f4e4c1', direction: 'rtl', textAlign: 'right', marginBottom: '1rem', lineHeight: '2' }}>{arabic}</p>
      <p style={{ color: '#c9b991', fontSize: '1rem', lineHeight: '1.7' }}>{turkmen}</p>
      {times && <p style={{ color: '#d4af7a', fontSize: '0.9rem', marginTop: '0.8rem', fontStyle: 'italic' }}>({times})</p>}
    </div>
  );

  const IrdenkyZikirler = () => (
    <div className="level-container">
      <h2 className="surah-title">Irdenki zikirler 🌅</h2>

      <ZCard
        arabic="أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ"
        turkmen="Biz irdene çykdyk we ähli mülk Allaha degişlidir. Hemme öwgiler Allaha bolsun. Ondan başga hak ilah ýokdur, Onyň hiç hili şärigi hem ýokdur. Hemme mülk Oňa degişli, Hemme öwgilere ol mynasyp, we Ol ähli zady etmäge güýçlidir. Eý Rabbim, şu günüň haýyrlaryny we ondan soňra geljek haýyrlyklary Senden sorayaryn! Şu günüň şerlerinden we ondan soňra geljek şerlerden meni gora! Eý Rabbim, meni ýaltalykdan we erbet garrylykdan gora! Eý Rabbim, meni dowzahdan we gabyr azabyndan gora!"
      />

      <ZCard
        arabic="اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ"
        turkmen="Eý, Allahym! Seniň (rehmetiň) bilen irdene çykýarys, Seniň (rehmetiň) bilen agşama ýetýäris, Seniň (rehmetiň) bilen ýaşaýarys, Seniň (buýrugyň) bilen ölýäris, we Seniň öňüňde direlýäris."
      />

      <ZCard
        arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
        turkmen="Eý Allahym! Sen meniň Rabbim, Senden başga hak ilah ýokdur. Sen meni ýaratdyň we men hem Seniň guluň. Men Saňa beren wadalarmý güjimiň ýetdiginden berjaý ederin we men Seniň wadaňa ynanýaryn. Meni günälerimiň şerinden gora. Seniň maňa beren ähli ýagşylyklaryňy men ykrar edýärin we men öz günälerimi hem boýun alýaryn. Meni bagyşla, çünki günäleri diňe sen bagyşlap bilersiň."
      />

      <ZCard
        arabic="اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ"
        turkmen="Eý Allahym! Men Seni, Seniň Arşyňy göterýän perişdeleri, ähli perişdeleriňi we ähli ýaradan zatlaryňy irdene çykmaklygym bilen şaýat tutýaryn: Seniň Alladygyňa, Senden başga hak ilahyň ýokdugyna, Seniň hiç bir şärigiň ýokdugyna we Muhammediň Seniň guluň we pygamberiňdigine."
        times="Bu doga dört gezek aýdylýar"
      />

      <ZCard
        arabic="اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ"
        turkmen="Eý Allahym! Mende we her bir kişide bolan ähli haýyrlar diňe Sendendir. Seniň şärigiň ýokdur. Ähli öwgüler we şükürler diňe Saňa mynasypdyr."
      />

      <ZCard
        arabic="اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ"
        turkmen="Eý Allahym! Meniň bedenimi, eşidişimi we gözümi hemme erbetlikden gora. Senden başga hak ilah ýokdur. Eý Allahym! Meni kapyrlykdan we garyplykdan gora. Meni gabyryň azabyndan gora. Senden başga hak ilah ýokdur."
        times="üç gezek aýdylýar"
      />

      <ZCard
        arabic="حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ"
        turkmen="Meniň üçin Allah ýeterlikdir. Ondan başga hak ilah ýokdur. Men Oňa daýanýaryn. Ol beýik Arşyň Rabbidir."
        times="Bu doga 7 gezek aýdylýar"
      />

      <ZCard
        arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي"
        turkmen="Eý Allahym! Senden bu dünýäde we ahyretde günämi bagyşlamagyňy hemde erbetlikden goramaklygyňy soraýaryn. Eý Allahym! Meniň dinimi, dünýämi, maşgalami we emlägimy hemme erbetlikden gora. Eý Allahym! Meniň kemçiliklerimi ört, gorkularymdan aman et. Eý Allahym! Meni öňümden, yzymdan, sagymdan, çepimden we ýokarymdan gorap sakla! Meni aşagymdan duýdansyz gelýan heläkçilikden Öz beýikligiň bilen gora!"
      />

      <ZCard
        arabic="اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ"
        turkmen="Eý Allahym! Eý gizlin we äşgär zatlary bilýän, Eý asmanlary we ýeri ýaradyn, Eý her bir zadyň eýesi we patyşasy! Senden başga hak ilahiň ýokdugyna men şaýatlyk edýärin. Meni öz nebsimiň şerinden, şeýtanyň şerinden, onuň şirk etdirmekliginden hem-de özüme ýa-da bir musulmana erbetlik etmekden gora!"
      />

      <ZCard
        arabic="بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ"
        turkmen="Men Alladan gorag soraýaryn, çünki kim Allahyň goragy astynda bolsa oňa ýerde we asmanda hiç zyýan ýetmez. Ol eşidýändir we bilýändir."
        times="Üç gezek okalýar"
      />

      <ZCard
        arabic="رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا"
        turkmen="Allah Rabbim diýip we Yslam dinim diýip we Muhammed pygamberim diýip men razy boldum."
        times="3 gezek aýdylýar"
      />

      <ZCard
        arabic="يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ"
        turkmen="Eý Diri we Barlygy saklaýan! Seniň Rehimiň bilen senden ýardam soraýaryn. Meniň hemme işlerimi düzelt we meni bir salym hem kömegiňden aýyrma."
      />

      <ZCard
        arabic="أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ"
        turkmen="Biz irdene çykdyk we ähli mülk älemleriň eýesi bolan Allaha degişlidir. Eý Allahym! Men Senden bu günüň haýryny, üstünligini, ýeňşini, nuruny, bereketini we hidaýatyny soraýaryn. Şu günüň içindäki şerlerden we ondan soňky şerlerden meni gora!"
      />

      <ZCard
        arabic="أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
        turkmen="Biz hak bolan yslam dini bilen we kelime şaýatlyk sözi bilen we Muhammed pygamberiň dini bilen we hiç bir sirk etmedik, musulman we Allany birleýji bolan Ibrahim atamyzyň dini bilen ertirledik."
      />

      <ZCard
        arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ"
        turkmen="Allah kemsizdir we ol öwgülere mynasypdyr."
        times="100 gezek okalýar"
      />

      <ZCard
        arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
        turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir."
        times="10 gezek okalýar"
      />

      <ZCard
        arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
        turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir."
        times="100 gezek okalýar — Günüň dowamynda"
      />

      <ZCard
        arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ"
        turkmen="Allaha Päklik we öwgiler bolsun! Onuň ýaradan zatlarynyň sanyça bolsun, Onuň razy bolan mukdaryça bolsun, Onuň Arşynyň agramyna deň bolsun we Onuň sözleriniň sanyça bolsun."
        times="üç gezek okalýar"
      />

      <ZCard
        arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا"
        turkmen="Eý Allahym! Men Senden peýdaly bilim, halal rysgal we kabul edilýän amal soraýaryn."
        times="irde okalýar"
      />

      <ZCard
        arabic="أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ"
        turkmen="Alladan ötünç soraýaryn we Oňa towa edýärin."
        times="Günde 100 gezek okalýar"
      />

      <ZCard
        arabic="اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ"
        turkmen="Eý Allahym, pygamberimiz Muhammedi öw we oňa salamatlyk ber!"
        times="10 gezek okalýar"
      />
    </div>
  );

  const AgsamkyZikirler = () => (
    <div className="level-container">
      <h2 className="surah-title">Agşamky zikirler 🌙</h2>

      <ZCard
        arabic="أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ"
        turkmen="Biz agşama ýetdik we ähli mülk Allaha degişlidir. Hemme öwgiler Allaha bolsun. Ondan başga hak ilah ýokdur, Onyň hiç hili şärigi hem ýokdur. Hemme mülk Oňa degişli, Hemme öwgilere ol mynasypdyr, we Ol ähli zady etmäge güýçlidir. Eý Rabbim, şu gijäniň haýyrlaryny we ondan soňra geljek haýyrlyklary Senden sorayaryn! Şu gijäniň şerlerinden we ondan soňra geljek şerlerden meni gora! Eý Rabbim, meni ýaltalykdan we erbet garrylykdan gora! Eý Rabbim, meni dowzahdan we gabyr azabyndan gora!"
      />

      <ZCard
        arabic="اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ"
        turkmen="Eý, Allahym! Seniň (rehmetiň) bilen agşama ýetýäris, Seniň (rehmetiň) bilen irdene çykýarys, Seniň (rehmetiň) bilen ýaşaýarys, Seniň (buýrugyň) bilen ölýäris, we Seniň öňüňde direlýäris!"
      />

      <ZCard
        arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
        turkmen="Eý Allahym! Sen meniň Rabbim, Senden başga hak ilah ýokdur. Sen meni ýaratdyň, men Seniň guluň. Men Saňa beren wadalarmý güjimiň ýetdiginden berjaý ederin we men Seniň wadaňa ynanýaryn. Meni günälerimiň şerinden gora. Seniň maňa beren ähli ýagşylyklaryňy men ykrar edýärin we men öz günälerimi hem boýun alýaryn. Meni bagyşla, çünki günäleri diňe sen bagyşlap bilersiň!"
      />

      <ZCard
        arabic="اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ"
        turkmen="Eý Allahym! Men Seni, Seniň Arşyňy göterýän perişdeleri, ähli perişdeleriňi we ähli ýaradan zatlaryňy agşama çykmaklygym bilen şaýat tutýaryn: Seniň Alladygyňa, Senden başga hak ilahyň ýokdugyna, Seniň hiç bir şärigiň ýokdugyna we Muhammediň Seniň guluň we pygamberiňdigine."
        times="Bu doga dört gezek aýdylýar"
      />

      <ZCard
        arabic="اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ"
        turkmen="Eý Allahym! Mende we her bir kişide bolan ähli haýyrlar diňe Sendendir. Seniň şärigiň ýokdur. Ähli öwgüler we şükürler diňe Saňa degişlidir."
      />

      <ZCard
        arabic="اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ"
        turkmen="Eý Allahym! Meniň bedenimi, eşidişimi we gözümi hemme erbetlikden gora. Senden başga hak ilah ýokdur. Eý Allahym! Meni kapyrlykdan we garyplykdan gora. Meni gabyryň azabyndan gora. Senden başga hak ilah ýokdur."
        times="üç gezek aýdylýar"
      />

      <ZCard
        arabic="حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ"
        turkmen="Meniň üçin Allah ýeterlikdir. Ondan başga hak ilah ýokdur. Men Oňa daýanýaryn. Ol beýik Arşyň Rabbidir."
        times="Bu doga 7 gezek aýdylýar"
      />

      <ZCard
        arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي"
        turkmen="Eý Allahym! Senden bu dünýäde we ahyretde günämi bagyşlamagyňy hemde erbetlikden goramaklygyňy soraýaryn. Eý Allahym! Meniň dinimi, dünýämi, maşgalami we emlägimy hemme erbetlikden gora. Eý Allahym! Meniň kemçiliklerimi ört, gorkularymdan aman et. Eý Allahym! Meni öňümden, yzymdan, sagymdan, çepimden we ýokarymdan gorap sakla! Meni aşagymdan duýdansyz gelýan heläkçilikden Öz beýikligiň bilen gora!"
      />

      <ZCard
        arabic="اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ"
        turkmen="Eý Allahym! Eý gizlin we äşgär zatlary bilýän, Eý asmanlary we ýeri ýaradyn, Eý her bir zadyň eýesi we patyşasy! Senden başga hak ilahiň ýokdugyna men şaýatlyk edýärin. Meni öz nebsimiň şerinden, şeýtanyň şerinden, onuň şirk etdirmekliginden hem-de özüme ýa-da bir musulmana erbetlik etmekden gora!"
      />

      <ZCard
        arabic="بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ"
        turkmen="Men Alladan gorag soraýaryn, çünki kim Allahyň goragy astynda bolsa oňa ýerde we asmanda hiç zyýan ýetmez. Ol eşidýändir we bilýändir."
        times="Üç gezek okalýar"
      />

      <ZCard
        arabic="رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا"
        turkmen="Allah Rabbim diýip we Yslam dinim diýip we Muhammed pygamberim diýip men razy boldum."
        times="3 gezek aýdylýar"
      />

      <ZCard
        arabic="يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ"
        turkmen="Eý Diri we Barlygy saklaýan! Seniň Rehimiň bilen senden ýardam soraýaryn. Meniň hemme işlerimi düzelt we meni bir salym hem kömegiňden aýyrma!"
      />

      <ZCard
        arabic="أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا"
        turkmen="Biz agşama ýetdik we ähli mülk älemleriň eýesi bolan Allaha degişlidir. Eý Allahym! Men Senden bu agşamyň haýryny, üstünligini, ýeňşini, nuruny, bereketini we hidaýatyny soraýaryn. Şu agşamyň içindäki we ondan soňky geljek şerlerden meni gora!"
      />

      <ZCard
        arabic="أَمْسَيْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
        turkmen="Biz hak bolan yslam dini bilen we kelime şaýatlyk sözi bilen we Muhammed pygamberiň dini bilen we hiç bir sirk etmedik, musulman we Allany birleýji bolan Ibrahim atamyzyň dini bilen agşama ýetdik"
      />

      <ZCard
        arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ"
        turkmen="Allah kemsizdir we ol öwgülere mynasypdyr."
        times="100 gezek okalýar"
      />

      <ZCard
        arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
        turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir."
        times="10 gezek okalýar"
      />

      <ZCard
        arabic="اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ"
        turkmen="Eý Allahym, pygamberimiz Muhammedi öw we oňa salamatlyk ber!"
        times="10 gezek okalýar"
      />

      <ZCard
        arabic="أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ"
        turkmen="Men Allahyň kämil sözleri bilen onuň ýaradan zatlarynyň şerinden gorag soraýaryn!"
      />
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

  const tajwidLessons = [
    { title: '1-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=1-nji-ders_kunpgn' },
    { title: '2-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=2-nji-ders_escmlb' },
    { title: '3-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=3-nji_ders_rv9934' },
    { title: '4-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=4-nji_ders_e3fxuc' },
    { title: '5-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=5-nji_ders_affhzn&playerType=chromeless', mp4: 'https://res.cloudinary.com/dv9zimdzx/video/upload/v1782553248/5-nji_ders_affhzn.mp4' },
    { title: '6-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=6-nji_ders_hy6bud' },
    { title: '7-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=7-nji_ders_aksgnk' },
    { title: '8-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=8-nji_ders_ly7ree' },
    { title: '9-nji ders',  src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=9-nji_ders_ohsngz' },
    { title: '10-nji ders', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=10_-nji_ders_wyokik' },
    { title: '11-nji ders', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=11-nji_ders_caf4sx' },
    { title: '12-nji ders', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=12-nji_ders_asbjaw' },
    { title: '13-nji ders', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=13-nji_ders_ygd4rn' },
    { title: '14-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=14-njy_sapak_s1hsuk' },
    { title: '15-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=15-nji_sapak_k4zwev' },
    { title: '16-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=16-nji_sapak_bmkx9d' },
    { title: '17-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=17-njy_sapak_u8dwas' },
    { title: '18-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=18-nji_sapak_udi5pf' },
    { title: '19-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=19-njy_sapak_aynuhp' },
    { title: '20-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=20-nji_sapak_hzcx20' },
    { title: '21-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=21-nji_sapak_cmsdo5' },
    { title: '22-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=22-nji_sapak_x1umkz' },
    { title: '23-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=23-nji_sapak_tddlbb' },
    { title: '24-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=24-nji_sapak_t3wmju' },
    { title: '25-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=25-nji_sapak_dkcstt' },
    { title: '26-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=26-nji_sapak_nxuag7' },
    { title: '27-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=27-njy_sapak_aiqycp' },
    { title: '28-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=28-nji_sapak_zcgriy' },
    { title: '29-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=29-njy_sapak_ljfbdj' },
    { title: '30-nji sapak', src: 'https://player.cloudinary.com/embed/?cloud_name=dv9zimdzx&public_id=30-nji_sapak_t4nlqv' },
  ];

  const TajwidLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Tajwid sapaklary</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {tajwidLessons.map((lesson) => (
          <div
            key={lesson.title}
            onClick={() => { setCurrentLesson(lesson); navigateTo('tajwid-lesson'); }}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)',
              border: '2px solid rgba(212, 175, 122, 0.3)',
              borderRadius: '14px',
              padding: '1rem 1.5rem',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{lesson.title}</p>
            <span style={{ color: '#d4af7a', fontSize: '1.2rem' }}>▶</span>
          </div>
        ))}
      </div>
    </div>
  );

  const TajwidLessonLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">{currentLesson?.title}</h2>
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)',
        border: '2px solid rgba(212, 175, 122, 0.3)',
        borderRadius: '14px',
        padding: '1.5rem',
        backdropFilter: 'blur(10px)'
      }}>
        <iframe src={currentLesson?.src} width="100%" height="400" style={{ borderRadius: '12px', border: 'none', display: 'block' }} allow="autoplay; fullscreen; encrypted-media" allowFullScreen />
        {currentLesson?.mp4 && (
          <a
            href={currentLesson.mp4}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block', marginTop: '1rem', color: '#d4af7a', fontSize: '1rem', textAlign: 'center' }}
          >
            ▶ Sapagy açmak
          </a>
        )}
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
          padding-top: 1.5rem;
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
          background: rgba(139, 90, 43, 0.85);
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
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1000;
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
          margin: 1.75rem 0 1rem;
          text-shadow: 0 2px 10px rgba(212, 175, 122, 0.3);
          line-height: 1.4;
        }

        .level-container > .title:first-child {
          margin-top: 0;
        }

        .main-menu-card {
          margin-bottom: 1.5rem;
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

          .level-container {
            padding-top: 0.75rem;
          }

          .title {
            font-size: 1.8rem;
            margin: 1.2rem 0 0.8rem;
            line-height: 1.3;
          }

          .main-menu-card {
            margin-bottom: 1.1rem;
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
      {currentLevel === 'zikirler' && <ZikirMenuLevel />}
      {currentLevel === 'irdenky' && <IrdenkyZikirler />}
      {currentLevel === 'agsamky' && <AgsamkyZikirler />}
      {currentLevel === 'shahadah-details' && <ShahadahDetailsLevel />}
      {currentLevel === 'surah' && <SurahLevel />}
      {currentLevel === 'ayah-1' && <Ayah1Detail />}
      {currentLevel === 'ayah-2' && <Ayah2Detail />}
      {currentLevel === 'ayah-3' && <Ayah3Detail />}
      {currentLevel === 'ayah-5' && <Ayah5Detail />}
      {currentLevel === 'ayah-4' && <Ayah4Detail />}
      {currentLevel === 'tajwid' && <TajwidLevel />}
      {currentLevel === 'tajwid-lesson' && <TajwidLessonLevel />}
    </div>
  );
}
