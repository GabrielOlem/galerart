import React from 'react';
import arte1 from '../../../../asserts/img/arte1.png';
import paint from '../../../../asserts/img/paint.png';
import rightArrow from '../../../../asserts/img/rightArrow.png';
import { Image } from '@chakra-ui/react';
import styles from './styles.module.scss';

function ProfileArts() {
  const cardArt = () => {
    return (
      <div className={styles.cardArt}>
        <div className={styles.cardArtImage}>
          <Image boxSize='185px' objectFit='cover' src={arte1} alt='Arte1' />
        </div>
        <div className={styles.cardArtContent}>
          <p className={styles.artTitle}>Encontro do céu e mar</p>
          <div className={styles.artType}>
            <Image boxSize='27px' objectFit='cover' src={paint} alt='Paint' />
            <p>Arte moderna</p>
          </div>
          <p className={styles.artDescription}>
            Óleo sobre tela pintado às mãos livres ao som de Alceu Valença no
            Carnaval de 2015.
          </p>
          <div className={styles.artValue}>
            <p>R$7.935,92</p>
            <button>
              <p>Ver exposição</p>
              <Image
              boxSize='16px'
              objectFit='cover'
              src={rightArrow}
              alt='Arrow'
            />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cardArt()}
        {cardArt()}
        {cardArt()}
        {cardArt()}
        {cardArt()}
        {cardArt()}
      </div>
    </div>
  );
}

export default ProfileArts;
