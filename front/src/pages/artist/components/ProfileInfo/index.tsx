import React from 'react';
import perfil from '../../../../asserts/img/perfil.png';
import paint from '../../../../asserts/img/paint.png';
import { Image } from '@chakra-ui/react';
import styles from './styles.module.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function ProfileInfo() {
  const cardImage = () => {
    return (
      <div className={styles.cardProfileImage}>
        <div className={styles.profileImageContent}>
          <div className={styles.yellowCircle} />
          <div className={styles.redCircle} />
          <div className={styles.purpleSquare} />
          <div className={styles.profileImage}>
            <Image
              boxSize='175px'
              objectFit='cover'
              src={perfil}
              alt='Perfil'
            />
          </div>
        </div>
      </div>
    );
  };

  const cardContent = () => {
    return (
      <div className={styles.cardProfileContent}>
        <p className={styles.profileName}>Mauro Andrade</p>
        <div className={styles.profileArtType}>
          <Image boxSize='27px' objectFit='cover' src={paint} alt='Paint' />
          <p>Arte moderna</p>
        </div>
        <p className={styles.profileDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    );
  };

  const cardContact = () => {
    return (
      <div className={styles.cardProfileContact}>
        <div className={styles.profileContactType}>
          <p>Telefone</p>
          <p>Email</p>
          <div>
            <InstagramIcon style={{fontSize: '24px', marginRight: '16'}} />
            <FacebookIcon style={{fontSize: '24px'}} />
          </div>
        </div>
        <div className={styles.profileContactInfo}>
          <p>(81) 99999-9999</p>
          <p>mauro.andrade@galerart.com</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {cardImage()}
      {cardContent()}
      {cardContact()}
    </div>
  );
}

export default ProfileInfo;
