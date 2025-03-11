import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Classic and Modern Translations',
    Svg: require('@site/static/img/bible.svg').default,
    description: (
      <>
        Typing Temple offers two public domain bible translations for typing: the classic King James Version (KJV) and the contemporary World English Bible (WEB).
      </>
    ),
  },
  {
    title: 'Full Verse Control',
    Svg: require('@site/static/img/typewriter.svg').default,
    description: (
      <>
        Typing temple lets you decide however many verses within each chapter of the bible you would like to practice typing.
      </>
    ),
  },
  {
    title: 'Typing Results Included',
    Svg: require('@site/static/img/speed.svg').default,
    description: (
      <>
        Choose whether or not you would like to see typing statisics such as words-per-minute (wpm) when you're finished typing.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center mb-6 h-40">
        <Svg role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="flex items-center py-8 w-full">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
