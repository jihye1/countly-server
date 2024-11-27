function CWE_670(x) { // STRAY_SEMICOLON
    while (++x <= 10) ;
    {
        sum += x;
    }
}
