type PropsT = {
  color: 'white' | 'black';
}

export const Arrow = ({ color }: PropsT) => {
  return (
    <svg width="20" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_72_131)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.213421 0.683094C0.29081 0.605705 0.416282 0.605705 0.493671 0.683094L4.3169 4.50633C4.39429 4.58371 4.39429 4.70919 4.3169 4.78658C4.23951 4.86397 4.11404 4.86397 4.03665 4.78658L0.213421 0.963345C0.136032 0.885956 0.136032 0.760483 0.213421 0.683094Z" fill={color} />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14013 0.683094C8.06274 0.605705 7.93726 0.605705 7.85987 0.683094L4.03664 4.50633C3.95925 4.58371 3.95925 4.70919 4.03664 4.78658C4.11403 4.86397 4.2395 4.86397 4.31689 4.78658L8.14013 0.963345C8.21751 0.885956 8.21751 0.760483 8.14013 0.683094Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_72_131">
          <rect width="7.64645" height="3.82323" fill="black" transform="translate(0.353546 0.823242)"/>
        </clipPath>
      </defs>
    </svg>
  )
}
