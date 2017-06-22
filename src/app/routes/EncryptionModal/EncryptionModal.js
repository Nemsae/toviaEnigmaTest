import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';

class EncryptionModal extends React.Component {
  constructor() {
    super();

    this.state = {
      // passphrase: '',
    };
    // this.createNewPassphrase = this.createNewPassphrase.bind(this);
    // this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  render() {
    const { active, handleToggle } = this.props;
    console.log('active:EncryptionModal ', active);
    const actions = [
      { label: 'Cancel', onClick: handleToggle },
      { label: 'Save', onClick: handleToggle },
    ];
    return (
      <div>
        {/* <Button label="Show my dialog" onClick={handleToggle} /> */}
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={handleToggle}
          onOverlayClick={handleToggle}
          title="My awesome dialog"
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    );
  }
}

export default EncryptionModal;
