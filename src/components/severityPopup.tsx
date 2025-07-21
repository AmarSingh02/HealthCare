import React from 'react';

interface SeverityPopupProps {
  isOpen: boolean;
  onClose: () => void;
  symptom?: { symptomName: string };
  onSelectSeverity: (severity: number) => void;
}

const SeverityPopup: React.FC<SeverityPopupProps> = ({ isOpen, onClose, symptom, onSelectSeverity }) => {
  if (!isOpen) return null;

  return (
    <><div style={styles.overlay}>
          <div style={styles.modal}>
              <button style={styles.closeButton} onClick={onClose}>
                  &times;
              </button>
              <h4> <strong>{symptom?.symptomName}</strong></h4>
                   <button className='primary' type='submit'>Submit</button>
              <div style={styles.severityScale}>
                  {[...Array(10)].map((_, index) => (
                      <button
                          key={index + 1}
                          style={styles.severityButton}
                          onClick={() => onSelectSeverity(index + 1)}
                      >
                          {index + 1}
                      </button>
                  ))}
              </div>
          </div>
      </div>
      
     
      </>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as React.CSSProperties['position'],
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  } as React.CSSProperties,
  modal: {
    background: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    minWidth: '500px',
    minHeight: '200px',
    position: 'relative' as React.CSSProperties['position'],
  } as React.CSSProperties,
  closeButton: {
    position: 'absolute' as React.CSSProperties['position'],
    top: '0.5rem',
    right: '0.75rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  } as React.CSSProperties,
  severityScale: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  } as React.CSSProperties,
  severityButton: {
    padding: '0.5rem 0.75rem',
    borderRadius: '50%',
    border: '1px solid #ccc',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default SeverityPopup;
