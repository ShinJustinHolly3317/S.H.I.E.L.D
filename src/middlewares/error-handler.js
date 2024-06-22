module.exports = {
  errorHandler: (err, _req, res, _next) => {
    console.log('[error handler]', err);

    return res.status(500).json({
      message: 'internal error'
    })
  }
}