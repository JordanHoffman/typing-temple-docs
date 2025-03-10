import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import SingleVerseOption from '@site/static/img/single-verse-option.png'
import SingleVerseDisplay from '@site/static/img/single-verse-display.png'
import MultipleVerseOption from '@site/static/img/multiple-verse-option.png'
import MultipleVerseDisplay from '@site/static/img/multiple-verse-display.png'
import EntireChapterOption from '@site/static/img/entire-chapter-option.png'
import EntireChapterDisplay from '@site/static/img/entire-chapter-display.png'

export default function VerseOptionTabs() {
	const tabClasses= 'max-w-2xl flex flex-col'
	return (
		<Tabs>
			<TabItem value="Single Verse" label="Single Verse" className={tabClasses} default>
				<p className=''>Just want to type a single verse? Not a problem! Set your <i><b>Verse start</b></i> and <i><b>Verse end</b></i> options to be the same.</p>
				<img src={SingleVerseOption} className='mb-3'/>
				<img src={SingleVerseDisplay} />
			</TabItem>
			<TabItem value="Multiple Verses" label="Multiple Verses" className={tabClasses}>
				<p className=''>You can type multiple verses according to your liking with the <i><b>Verse start</b></i> and <i><b>Verse end</b></i> options.</p>
				<img src={MultipleVerseOption} className='mb-3'/>
				<img src={MultipleVerseDisplay} />
			</TabItem>
			<TabItem value="Entire Chapter" label="Entire Chapter" className={tabClasses}>
				<p className=''>You can type an entire chapter by setting <i><b>Verse start</b></i> to <i><b>1</b></i>, and setting <i><b>Verse end</b></i> to <i><b>final</b></i>. Or, you can manually choose the final verse if you wish.</p>
				<img src={EntireChapterOption} className='mb-3'/>
				<img src={EntireChapterDisplay} />
			</TabItem>

		</Tabs>
	)
}