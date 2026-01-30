# Hero_slider

Reusable Hero section as a Single Directory Component (SDC) for Drupal 11 that renders multiple slides. Each slide includes a title, a short text, and a background image.

Based on the _Splide_ JavaScript library for the slider functionality: https://splidejs.com

## Features

- Navigation (arrows)
- Pagination (dots)
- Touch/swipe support on mobile devices
- Optional: Autoplay (toggleable by property)
- Responsive design
- Optional autoplay for automatic slide transitions
- Uses lazy loading for images
- Keyboard navigation
- ARIA attributes for slides/carousel
- Focus management during navigation
- Images: Optional alt-attribute

## Main Properties

```YAML
autoplay:
  type: boolean # true to enable autoplay
slider_id:
  type: string  # Unique identifier for the slider instance

Slides:
  properties:
    headline:
      type: string  # Title of the slide
    subline:
      type: string  # Short text for the slide
    image:
      type: object  # Image object for the slide background
```
