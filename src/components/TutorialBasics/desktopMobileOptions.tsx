import React from 'react';
import DesktopOptions from '@site/static/img/desktop-options.png'
import MobileOptions from '@site/static/img/mobile-options.png'

export default function DesktopMobileOptions() {
	const classes = 'flex flex-col' 
	return (
		<div className='flex flex-col gap-8'>
			<div className={classes}>
				<h3>Desktop</h3>
				<img src={DesktopOptions}/>
			</div>
			<div className={classes}>
				<h3>Mobile</h3>
				<div className='max-w-sm'>
					<img src={MobileOptions} />
				</div>
			</div>
		</div>
	)
}