export function DecorativeBorder() {
    return (
      <div className="relative h-24 w-full overflow-hidden rounded-lg">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center space-x-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-12 h-12 bg-[#006644] rounded-full flex items-center justify-center">
                <div className="w-3 h-6 bg-[#cc0000] rounded-full" />
              </div>
              <div className="w-8 h-8 bg-[#ffd700] rounded-full ml-4 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    )
  }