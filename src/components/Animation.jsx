"use client"

import { InView } from "react-intersection-observer"

export default function Animation({
  children,
  classNameInView,
  classNameNotInView,
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  )
}