<script type="module">
    import darkmodeJs from "https://esm.sh/darkmode-js";
    new Darkmode().showWidget();
</script>

  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: 'https://paygeon.github.io/paygeon-api/paygeon-api.json',
      dom_id: '#swagger-ui',
    });
  };

